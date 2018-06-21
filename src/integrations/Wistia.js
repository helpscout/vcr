/*global _wq */
// @flow
import Integration from './Integration'
import { contains } from '../utilities.js'
import type { VideoId } from './Integration'

export const WISTIA_SCRIPT_ID = 'wistia_script'
export const WISTIA_SCRIPT_SRC = 'https://fast.wistia.com/assets/external/E-v1.js'

class Wistia extends Integration {
  destroy() {
    const script = this.getInjectScript()
    /* istanbul ignore next */
    if (!script || !script.parentNode) return

    script.parentNode.removeChild(script)
  }

  getInjectScript(): ?HTMLElement {
    return document.getElementById(WISTIA_SCRIPT_ID)
  }

  injectScript() {
    if (this.getInjectScript()) return
    const wistiaScript = document.createElement('script')
    wistiaScript.id = WISTIA_SCRIPT_ID
    wistiaScript.type = 'text/javascript'
    wistiaScript.src = WISTIA_SCRIPT_SRC
    wistiaScript.async = true
    // $FlowFixMe
    document.body.appendChild(wistiaScript)
  }

  didAddId(id: VideoId) {
    // $FlowFixMe
    window._wq = window._wq || []
    // $FlowFixMe
    _wq.push({ id: id })
  }

  addIdFromNode(node: HTMLElement) {
    if (!node) return
    const classList = Array.from(node.classList)
    const asyncId = classList
      .filter(className => contains(className, 'wistia_async_'))[0]

    if (!asyncId) return
    const id = asyncId.replace('wistia_async_', '')

    this.add(id)
  }

  addIdFromFrame(frame: HTMLElement) {
    // $FlowFixMe
    if (!frame || !frame.src) return
    const params = frame.src.split('/')
    const id = params[params.length - 1]

    this.add(id)
  }

  nullifyJsonPScript(script: Object) {
    if (!script.src || !contains(script.src, '.jsonp')) return
    script.parentNode.removeChild(script)
  }

  nullifyEmbedScript(script: Object) {
    if (!script.src || !contains(script.src, 'external/E-v1.js')) return
    script.parentNode.removeChild(script)
  }

  parse(node: HTMLElement) {
    const scripts = Array.from(node.querySelectorAll('script')).filter(
      script => {
        // $FlowFixMe
        return contains(script.src, 'wistia.com')
      }
    )
    const nodes = Array.from(node.querySelectorAll('div.wistia_embed'))
    const frames = Array.from(node.querySelectorAll('iframe.wistia_embed'))

    if (scripts.length) {
      this.injectScript()
    }

    scripts.forEach(script => {
      this.nullifyEmbedScript(script)
      this.nullifyJsonPScript(script)
    })

    nodes.forEach(node => { this.addIdFromNode(node) })
    frames.forEach(frame => { this.addIdFromFrame(frame) })
  }
}

export default Wistia
