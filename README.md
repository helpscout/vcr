# 📼 VCR [![npm version](https://badge.fury.io/js/%40helpscout%2Fvcr.svg)](https://badge.fury.io/js/%40helpscout%2Fvcr) [![Build Status](https://travis-ci.org/helpscout/vcr.svg?branch=master)](https://travis-ci.org/helpscout/vcr) [![Coverage Status](https://coveralls.io/repos/github/helpscout/vcr/badge.svg?branch=master)](https://coveralls.io/github/helpscout/vcr?branch=master)

> A tiny React component to handle video embeds

- **Zero dependency**  - Ziltch.
- **Wistia** rendering support

## 🔧 Installation

```
npm install --save @helpscout/vcr
```

## 🕹 Usage

Here's a quick example of how to (not-so) dangerously render video embeds with VCR:

```jsx
import React from 'react'
import VCR from '@helpscout/vcr'

const html = `
<script src="//fast.wistia.com/assets/external/E-v1.js" async></script>
<div class="wistia_embed wistia_async_abcde12345" style="width:640px;height:360px;"></div>
<script>
window._wq = window._wq || [];
_wq.push({ id: "abcde12345", onReady: function(video) {
  console.log("I got a handle to the video!", video);
}});
</script>
`

const App = props => (
  return (
    <VCR html={html} />
  )
)
```

That's it! `VCR` will take care of parsing and rendering the video embeds as it "dangerously" sets the innerHTML to render out the rest of your HTML.

## 🙌 Supported integrations

* [Wistia](https://wistia.com/support/developers/player-api)
