import React from 'react'
import { shallow, mount } from 'enzyme'
import VCR from '../index'
import * as fixtures from './fixtures'
import { cleanUp } from '../testHelpers'

describe('VCR', () => {
  afterEach(cleanUp)

  describe('Basics', () => {
    test('It can render', () => {
      const html = fixtures.wistiaVideoJsonP
      const wrapper = shallow(<VCR html={html} />)

      expect(wrapper).toBeTruthy()
    })

    test('It dangerously sets the innerHTML', () => {
      const html = 'abc123'
      const wrapper = shallow(<VCR html={html} />)

      expect(wrapper.html()).toContain(html)
    })

    test('It does not render children', () => {
      const wrapper = shallow(<VCR>Stuff</VCR>)

      expect(wrapper.html()).not.toContain('Stuff')
    })

    test('It accepts props, like a standard div', () => {
      const wrapper = shallow(<VCR className="hallo" id="yup" />)

      expect(wrapper.html()).toContain('hallo')
      expect(wrapper.html()).toContain('yup')
    })
  })

  describe('Props', () => {
    test('It does not update for non-HTML prop changes', () => {
      const html = 'abc123'
      const props = {
        html,
        greeting: 'hello',
      }
      const wrapper = shallow(<VCR {...props} />)
      const o = wrapper.instance()
      const nextProps = { ...props, greeting: 'hi' }

      expect(o.shouldComponentUpdate(nextProps)).toBe(false)
    })

    test('Updates for HTML prop changes', () => {
      const html = 'abc123'
      const props = {
        html,
        greeting: 'hello',
      }
      const wrapper = shallow(<VCR {...props} />)
      const o = wrapper.instance()
      const nextProps = { ...props, html: 'new' }

      expect(o.shouldComponentUpdate(nextProps)).toBe(true)
    })
  })

  describe('CleanUp', () => {
    test('Does not run cleanUp by default', () => {
      const spy = jest.fn()
      const wrapper = mount(<VCR html="abc" />)
      wrapper.instance().integrations.wistia.destroy = spy

      wrapper.unmount()

      expect(spy).not.toHaveBeenCalled()
    })

    test('Runs cleanUp, if specified', () => {
      const spy = jest.fn()
      const wrapper = mount(<VCR html="abc" cleanUpOnUnmount />)
      wrapper.instance().integrations.wistia.destroy = spy

      wrapper.unmount()

      expect(spy).toHaveBeenCalled()
    })
  })
})
