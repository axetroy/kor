const Koa = require('koa');
const Router = require('koa-router');
const methods = require('methods');

class Kor extends Koa {
  constructor() {
    super();
  }
  route(url, router) {
    if (router instanceof Router === false) {
      throw new Error(
        `Invalid type of .route(url, router), argument <router> must implement of Koa Router`
      );
    }

    const newRouter = new Router();
    newRouter.use(url, router.routes(), router.allowedMethods());
    return this.use(newRouter.routes());
  }
}

// koa-route support all method
methods.concat(['all']).forEach(method => {
  // method is lowercase all ready
  Object.defineProperty(Kor.prototype, method, {
    value: function(url, handler) {
      const newRouter = new Router();
      const routerDefiner = newRouter[method];
      if (!routerDefiner) throw new Error(`Not support the method ${method}`);
      routerDefiner.call(newRouter, url, handler);
      return this.use(newRouter.routes());
    }
  });
});

Kor.Kor = Kor;
Kor.Router = Router;

module.exports = Kor;
module.exports.default = Kor;
