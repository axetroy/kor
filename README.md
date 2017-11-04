# Kor

[![Greenkeeper badge](https://badges.greenkeeper.io/axetroy/@axetroy/kor.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/axetroy/@axetroy/kor.svg?branch=master)](https://travis-ci.org/axetroy/@axetroy/kor)
[![Dependency](https://david-dm.org/axetroy/@axetroy/kor.svg)](https://david-dm.org/axetroy/@axetroy/kor)
![License](https://img.shields.io/badge/license-MIT-green.svg)
[![Prettier](https://img.shields.io/badge/Code%20Style-Prettier-green.svg)](https://github.com/prettier/prettier)
![Node](https://img.shields.io/badge/node-%3E=7.6-blue.svg?style=flat-square)
[![npm version](https://badge.fury.io/js/%40axetroy%2Fgpm.svg)](https://badge.fury.io/js/%40axetroy%2Fkor)
![Size](https://github-size-badge.herokuapp.com/axetroy/@axetroy/kor.svg)

Integration Koa + Koa-router with graceful API

## Features

- [x] Base on Koa@2
- [x] Integration Koa-router
- [x] Graceful Router define

## Installation
```bash
npm install @axetroy/kor -g
```

## Supports

- [x] Windows
- [x] Linux
- [x] MacOS

## Usage

```bash
const Kor = require('@axetroy/kor');

new Kor()
  .use(function(ctx) {
    ctx.body = 'hello world';
  })
  .listen(8080);
```

More Examples

## Contributing

```bash
git clone https://github.com/axetroy/kor.git
cd ./@axetroy/kor
yarn
```

You can flow [Contribute Guide](https://github.com/axetroy/@axetroy/kor/blob/master/contributing.md)

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
| [<img src="https://avatars1.githubusercontent.com/u/9758711?v=3" width="100px;"/><br /><sub>Axetroy</sub>](http://axetroy.github.io)<br />[💻](https://github.com/axetroyanti-redirect/anti-redirect/commits?author=axetroy) [🐛](https://github.com/axetroyanti-redirect/anti-redirect/issues?q=author%3Aaxetroy) 🎨 |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

## License

The [MIT License](https://github.com/axetroy/@axetroy/kor/blob/master/LICENSE)
