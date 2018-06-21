import React from 'react'
import { shallow } from 'enzyme'
import VCR from '../index'
import { WISTIA_SCRIPT_SRC } from '../integrations/Wistia'
import * as fixtures from './fixtures'
import { cleanUp } from '../testHelpers'

describe('VCR: Wistia', () => {
  afterEach(cleanUp)

  test('It can render', () => {
    const html = fixtures.wistiaVideoJsonP
    const wrapper = shallow(<VCR html={html} />)

    expect(wrapper).toBeTruthy()
  })

  test('Removes .jsonp tags', () => {
    const html = fixtures.wistiaVideoJsonP
    const wrapper = shallow(<VCR html={html} />)

    expect(wrapper.html()).not.toBe(html)
    expect(wrapper.html()).not.toContain('.jsonp')
  })

  test('Removes Wistia initialization script', () => {
    const html = fixtures.wistiaVideoJsonP
    const wrapper = shallow(<VCR html={html} />)

    expect(wrapper.html()).not.toBe(html)
    expect(wrapper.html()).not.toContain(WISTIA_SCRIPT_SRC)
  })

  test('Adds video ID', () => {
    const id = 'jchcmam7p5'
    const html = fixtures.wistiaVideoJsonP
    const wrapper = shallow(<VCR html={html} />)
    const o = wrapper.instance().integrations.wistia

    expect(o.getIds()).toContain(id)
  })

  test('Adds video ID to Wisita _wq queue', () => {
    const id = 'jchcmam7p5'
    const html = fixtures.wistiaVideoJsonP

    expect(window._wq).toBeFalsy()

    const wrapper = shallow(<VCR html={html} />)
    const o = wrapper.instance().integrations.wistia

    expect(o.getIds()).toContain(id)
    expect(window._wq[0].id).toEqual(id)
  })

  test('Adds the Wistia script to document.body', () => {
    const html = fixtures.wistiaVideoJsonP
    const wrapper = shallow(<VCR html={html} />)

    expect(document.body.innerHTML).toContain(WISTIA_SCRIPT_SRC)
  })

  test('Works with Wistia Standard embed', () => {
    const id = 'abcde12345'
    const html = fixtures.wistiaStandardEmbed

    expect(window._wq).toBeFalsy()

    const wrapper = shallow(<VCR html={html} />)
    const o = wrapper.instance().integrations.wistia

    expect(o.getIds()).toContain(id)
    expect(window._wq[0].id).toEqual(id)
    expect(wrapper.html()).not.toContain(WISTIA_SCRIPT_SRC)
  })

  test('Works with Wistia iFrame embed', () => {
    const id = 'abcde12345'
    const html = fixtures.wistiaIFrameEmbed

    expect(window._wq).toBeFalsy()

    const wrapper = shallow(<VCR html={html} />)
    const o = wrapper.instance().integrations.wistia

    expect(o.getIds()).toContain(id)
    expect(window._wq[0].id).toEqual(id)
    expect(wrapper.html()).not.toContain(WISTIA_SCRIPT_SRC)
  })
})