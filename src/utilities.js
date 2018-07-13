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
  items: Array<any>

  constructor() {
    this.items = []
  }

  add(item: any) {
    if (this.items.indexOf(item) >= 0) return
    this.items.push(item)
  }

  delete(item: any) {
    const index = this.items.indexOf(item)
    if (this.items.indexOf(item) < 0) return
    this.items.splice(index, 1)
  }

  getItems(): Array<any> {
    return this.items
  }
}

// Small polyfill for Array.from
export function arrayFrom(
  list: Array<any> | DOMTokenList | NodeList,
): Array<any> {
  return [].slice.call(list)
}
