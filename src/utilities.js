// @flow
import getDocumentFromComponent from '@helpscout/react-utils/dist/getDocumentFromComponent'

/**
 * Strings
 */
export const contains = (string: string, match: string): boolean => {
  return string.indexOf(match) >= 0
}

export const getDocumentFromReactComponent = getDocumentFromComponent

// Simple Set polyfill.
export class SimpleSet {
  constructor() {
    this.items = []
  }

  add(item) {
    if (this.items.indexOf(item) >= 0) return
    this.items.push(item)
  }

  delete(item) {
    const index = this.items.indexOf(item)
    if (this.items.indexOf(item) < 0) return
    this.items.splice(index, 1)
  }

  getItems() {
    return this.items
  }
}
