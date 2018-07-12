// @flow
import getDocumentFromComponent from '@helpscout/react-utils/dist/getDocumentFromComponent'

/**
 * Strings
 */
export const contains = (string: string, match: string): boolean => {
  return string.indexOf(match) >= 0
}

export const getDocumentFromReactComponent = getDocumentFromComponent
