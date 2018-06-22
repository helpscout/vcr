import React from 'react'
import { shallow } from 'enzyme'
import VCR from '../index'
import * as fixtures from './fixtures'
import { cleanUp } from '../testHelpers'

describe('VCR: YouTube', () => {
  afterEach(cleanUp)

  test('It can render', () => {
    const html = fixtures.youtubeIFrameEmbed
    const wrapper = shallow(<VCR html={html} />)

    expect(wrapper).toBeTruthy()
  })

  test('Renders YouTube iFrame', () => {
    const html = fixtures.youtubeIFrameEmbed

    const wrapper = shallow(<VCR html={html} />)
    const markup = wrapper.html()

    expect(markup).toContain('iframe')
    expect(markup).toContain('youtube.com')
  })
})
