import React from 'react'
import {storiesOf} from '@storybook/react'
import VCR from '../src/index'
import * as fixtures from '../src/fixtures/embed'

const stories = storiesOf('VCR', module)

stories.add('HTML: Video', () => {
  return (
    <div>
      Video:
      <VCR html={fixtures.htmlVideoTag} />
    </div>
  )
})
