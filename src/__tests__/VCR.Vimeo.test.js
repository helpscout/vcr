import React from 'react'
import {shallow} from 'enzyme'
import VCR from '../index'
import * as fixtures from '../fixtures/embed'
import {cleanUp} from '../testHelpers'

describe('VCR: Vimeo', () => {
  afterEach(cleanUp)

  test('It can render', () => {
    const html = fixtures.vimeoIFrameEmbed
    const wrapper = shallow(<VCR html={html} />)

    expect(wrapper).toBeTruthy()
  })

  test('Renders Vimeo iFrame', () => {
    const html = fixtures.vimeoIFrameEmbed

    const wrapper = shallow(<VCR html={html} />)
    const markup = wrapper.html()

    expect(markup).toContain('iframe')
    expect(markup).toContain('vimeo.com')
  })
})
