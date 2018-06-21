import Wistia, { WISTIA_SCRIPT_ID, WISTIA_SCRIPT_SRC } from '../Wistia'
import { cleanUp } from '../../testHelpers'

describe('Wistia', () => {
  afterEach(cleanUp)

  describe('injectScript', () => {
    test('Adds script to document.body', () => {
      const o = new Wistia()
      o.injectScript()

      expect(document.body.innerHTML).toContain(WISTIA_SCRIPT_SRC)
    })

    test('Only adds one script to document.body', () => {
      const o = new Wistia()
      o.injectScript()
      o.injectScript()
      o.injectScript()

      expect(document.body.querySelectorAll('script').length).toBe(1)
    })

    test('Does not inject script, if one exists', () => {
      const script = document.createElement('script')
      script.src = WISTIA_SCRIPT_SRC
      script.id = WISTIA_SCRIPT_ID
      document.body.appendChild(script)

      const o = new Wistia()
      o.injectScript()

      expect(document.body.querySelectorAll('script').length).toBe(1)
    })
  })

  describe('destroy', () => {
    test('Removes wistia script, if applicable', () => {
      const o = new Wistia()
      o.injectScript()
      o.destroy()

      expect(document.body.innerHTML).not.toContain(WISTIA_SCRIPT_SRC)
    })
  })

  describe('addIdFromNode', () => {
    test('Does not add if Node is invalid', () => {
      const spy = jest.fn()
      const o = new Wistia()
      o.add = spy

      o.addIdFromNode()

      expect(spy).not.toHaveBeenCalled()
    })

    test('Does not add if Wistia className ID is missing', () => {
      const spy = jest.fn()
      const o = new Wistia()
      o.add = spy

      const node = document.createElement('div')
      node.classList.add('wistia_embed')
      node.classList.add('wistia_nopeee')

      o.addIdFromNode(node)

      expect(spy).not.toHaveBeenCalled()
    })

    test('Adds ID, if applicable', () => {
      const spy = jest.fn()
      const o = new Wistia()
      o.add = spy

      const node = document.createElement('div')
      node.classList.add('wistia_embed')
      node.classList.add('wistia_async_123')

      o.addIdFromNode(node)

      expect(spy).toHaveBeenCalledWith('123')
    })
  })

  describe('addIdFromFrame', () => {
    test('Does not add if Frame is invalid', () => {
      const spy = jest.fn()
      const o = new Wistia()
      o.add = spy

      o.addIdFromFrame()

      expect(spy).not.toHaveBeenCalled()
    })

    test('Does not add if src is missing', () => {
      const spy = jest.fn()
      const o = new Wistia()
      o.add = spy

      const frame = document.createElement('frame')

      o.addIdFromFrame(frame)

      expect(spy).not.toHaveBeenCalled()
    })

    test('Adds ID, if applicable', () => {
      const spy = jest.fn()
      const o = new Wistia()
      o.add = spy

      const frame = document.createElement('div')
      frame.src = '//fast.wistia.net/embed/iframe/123'

      o.addIdFromFrame(frame)

      expect(spy).toHaveBeenCalledWith('123')
    })
  })
})
