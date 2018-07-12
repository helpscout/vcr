import React from 'react'
import {storiesOf} from '@storybook/react'
import VCR from '../src/index'
import * as fixtures from '../src/fixtures/embed'

const stories = storiesOf('VCR', module)

stories.add('Vimeo', () => {
  return (
    <div>
      Video:
      <VCR html={fixtures.vimeoIFrameEmbed} />
    </div>
  )
})
