# 📼 VCR [![npm version](https://badge.fury.io/js/%40helpscout%2Fvcr.svg)](https://badge.fury.io/js/%40helpscout%2Fvcr) [![Build Status](https://travis-ci.org/helpscout/vcr.svg?branch=master)](https://travis-ci.org/helpscout/vcr) [![Coverage Status](https://coveralls.io/repos/github/helpscout/vcr/badge.svg?branch=master)](https://coveralls.io/github/helpscout/vcr?branch=master)

> A tiny React component to handle video embeds

- **Tiny**, at less than 2KB Gzipped
- **Performant**
- **Multiple** video rendering support (including Wistia!)

## Table of contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->

<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [🔧 Installation](#-installation)
- [🕹 Usage](#%F0%9F%95%B9-usage)
- [🙌 Supported Embeds](#-supported-embeds)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## 🔧 Installation

```
npm install --save @helpscout/vcr
```

## 🕹 Usage

Here's a quick example of how to (not-so) dangerously render video embeds with VCR:

```jsx
import React from 'react'
import VCR from '@helpscout/vcr'

// Your markup which many contain fancy video embeds
const html = `
<script src="//fast.wistia.com/assets/external/E-v1.js" async></script>
<div class="wistia_embed wistia_async_abcde12345" style="width:640px;height:360px;"></div>
`

// Pass it into VCR via the html prop
const App = props => (
  return (
    <VCR html={html} />
  )
)
```

That's it! `VCR` will take care of parsing and rendering the video embeds as it "dangerously" sets the innerHTML to render out the rest of your HTML.

## 🙌 Supported Embeds

- [HTML Video](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video)
- [Vimeo](https://help.vimeo.com/hc/en-us/articles/360000710167-Adjusting-the-size-of-the-embedded-player)
- [Wistia](https://wistia.com/support/developers/player-api)
- [YouTube](https://support.google.com/youtube/answer/171780?hl=en)
