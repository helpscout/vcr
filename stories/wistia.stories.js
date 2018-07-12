import React from 'react'
import {storiesOf} from '@storybook/react'
import Frame from 'react-frame-component'
import VCR from '../src/index'
import * as fixtures from '../src/fixtures/embed'

const stories = storiesOf('VCR', module)

stories.add('Wistia', () => {
  return (
    <div>
      Video:
      <VCR html={fixtures.wistiaVideoJsonP} />
    </div>
  )
})

stories.add('Wistia/Beacon', () => {
  return (
    <div>
      Video:
      <VCR html={fixtures.hsBeaconEmbed} />
    </div>
  )
})

stories.add('Wistia/Frame', () => {
  return (
    <div>
      This is iFrame:<br />
      <Frame>
        <div>
          Video:
          <VCR html={fixtures.hsBeaconEmbed} />
        </div>
      </Frame>
    </div>
  )
})
