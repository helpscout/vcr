// @flow
import React, {Component} from 'react'
import {getDocumentFromReactComponent} from './utilities'
import * as integrations from './integrations'

type Props = {
  cleanUpOnUnmount: boolean,
  children?: any,
  html: string,
}

type Integration = {
  destroy: () => void,
}

class VCR extends Component<Props> {
  static defaultProps = {
    cleanUpOnUnmount: false,
    html: '',
  }
  _node: HTMLElement
  integrations: Object

  constructor(props: Props) {
    super(props)
    this.integrations = Object.keys(integrations).reduce(
      (list: Object, key: string) => {
        list[key.toLowerCase()] = new integrations[key]()
        return list
      },
      {},
    )
  }

  shouldComponentUpdate(nextProps: Props) {
    return this.props.html !== nextProps.html
  }

  componentWillUnmount() {
    if (!this.props.cleanUpOnUnmount) return
    this._eachIntegration((integration: Integration) => integration.destroy())
  }

  _eachIntegration(callback: (args: any) => void) {
    /* istanbul ignore next */
    if (!callback || typeof callback !== 'function') return
    Object.keys(this.integrations).forEach((key: string) => {
      callback(this.integrations[key])
    })
  }

  getDocument = () => {
    return getDocumentFromReactComponent(this)
  }

  getSerializedHTML() {
    const fragment = document.createElement('div')
    fragment.innerHTML = this.props.html
    this._eachIntegration(integration =>
      integration.parse({
        node: fragment,
        document: this.getDocument(),
      }),
    )

    // Mutated innerHTML after integration parse cycles
    return fragment.innerHTML
  }

  render() {
    const {children, cleanUpOnUnmount, html, ...rest} = this.props
    return (
      <div
        {...rest}
        dangerouslySetInnerHTML={{__html: this.getSerializedHTML()}}
      />
    )
  }
}

export default VCR
