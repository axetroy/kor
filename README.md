# Kor

[![Greenkeeper badge](https://badges.greenkeeper.io/axetroy/kor.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/axetroy/kor.svg?branch=master)](https://travis-ci.org/axetroy/kor)
[![Dependency](https://david-dm.org/@axetroy/kor.svg)](https://david-dm.org/@axetroy/kor)
![License](https://img.shields.io/badge/license-MIT-green.svg)
[![Prettier](https://img.shields.io/badge/Code%20Style-Prettier-green.svg)](https://github.com/prettier/prettier)
![Node](https://img.shields.io/badge/node-%3E=7.6-blue.svg?style=flat-square)
[![npm version](https://badge.fury.io/js/%40axetroy%2Fkor.svg)](https://badge.fury.io/js/%40axetroy%2Fkor)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Faxetroy%2Fkor.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Faxetroy%2Fkor?ref=badge_shield)

Integration Koa + Koa-router with graceful API

## Features

- [x] Base on [Koa@2](https://github.com/koajs/koa)
- [x] Integration [Koa-router](https://github.com/alexmingoia/koa-router)
- [x] Graceful Router define
- [ ] Static file (unnecessary)
- [ ] Auto Load View Template(unnecessary)

## Installation
```bash
npm install @axetroy/kor -g
```

## Usage

```javascript
const Kor = require('@axetroy/kor');
const userRoute = Kor.Router();
const commonRoute = Kor.Router();

userRoute
  .get('/', ctx => {
    ctx.body = `hey! It's user API`;
  })
  .head('/auth', ctx => {
    ctx.body = 'Auth success!';
  })
  .get('/info', ctx => {
    ctx.body = 'here is your user information';
  })
  .post('/register', ctx => {
    ctx.body = 'register success!';
  })
  .put('/info', ctx => {
    ctx.body = 'Update user information success!';
  })
  .delete('/addFriend/:username', ctx => {
    ctx.body = `Add friend ${ctx.params.username} success!`;
  });

commonRoute
  .get('/', ctx => {
    ctx.body = `hey! It's common API`;
  })
  .get('/now', ctx => {
    ctx.body = Date.now();
  });

const app = new Kor();

app
  .use((ctx, next) => {
    // an middleware
    next();
  })
  .all('/all', ctx => {
    ctx.body = `This is all method: ${ctx.request.method}`;
  })
  .get('/say/:word', ctx => {
    ctx.body = `Hello ${ctx.params.word}`;
  })
  .route('/api/v1/common', commonRoute)
  .route('/api/v1/user', userRoute)
  .use(function NotFound(ctx) {
    ctx.body = '404 Not Found';
  })
  .listen(8080, function() {
    console.info(`Listen on 8080`);
  });

```

[More Examples](https://github.com/axetroy/kor/tree/master/examples)

## Contributing

```bash
git clone https://github.com/axetroy/kor.git
cd ./kor
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


[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Faxetroy%2Fkor.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Faxetroy%2Fkor?ref=badge_large)