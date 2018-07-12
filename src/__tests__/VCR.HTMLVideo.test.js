import React from 'react'
import {shallow} from 'enzyme'
import VCR from '../index'
import * as fixtures from '../fixtures/embed'
import {cleanUp} from '../testHelpers'

describe('VCR: HTML VIdeo', () => {
  afterEach(cleanUp)

  test('It can render', () => {
    const html = fixtures.htmlVideoTag
    const wrapper = shallow(<VCR html={html} />)

    expect(wrapper).toBeTruthy()
  })

  test('Renders HTML Video', () => {
    const html = fixtures.htmlVideoTag

    const wrapper = shallow(<VCR html={html} />)
    const markup = wrapper.html()

    expect(markup).toContain('<video')
    expect(markup).toContain('.mp4')
    expect(markup).toContain('</video>')
  })
})
