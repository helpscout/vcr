// @flow
export type VideoId = string

class Integration {
  __ids: Set<string>

  constructor() {
    this.__ids = new Set()
  }

  // Actions
  add(id: VideoId) {
    this.__ids.add(id)
    this.didAddId(id)
  }

  remove(id: VideoId) {
    this.__ids.delete(id)
    this.didRemoveId(id)
  }

  getIds(): Object {
    return this.__ids
  }

  /* istanbul ignore next */
  // Placeholder for class inheritance
  destroy() {}

  /**
   * Parse and act on the pre-rendered HTML before dangerously injecting.
   * Note: The DOM node CAN be mutated. This is by design.
   * @param {*} node
   */
  /* istanbul ignore next */
  // Placeholder for class inheritance
  parse(props: {node: HTMLElement, document: Document}) {}

  // Lifecycle actions
  didAddId(id: VideoId) {}
  didRemoveId(id: VideoId) {}
}

export default Integration
