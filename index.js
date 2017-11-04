const Koa = require('koa');
const Router = require('koa-router');
const methods = require('methods');
const router = new Router();

class Server {
  constructor() {
    this.__koa = new Koa();
    Object.defineProperty(this, '__koa', {
      configurable: false,
      enumerable: false
    });
  }
  get koa() {
    return this.__koa;
  }
  use(middleware) {
    this.__koa.use(middleware);
    return this;
  }
  route(url, router) {
    url = url === '*' ? '/' : url;
    const newRouter = new Router();

    if (router instanceof Router) {
      newRouter.use(url, router.routes(), router.allowedMethods());
    } else if (typeof router === 'function') {
      newRouter.get(url, router);
    }

    return this.use(newRouter.routes());
  }
  listen(port) {
    return this.__koa.listen(port);
  }
}

Object.defineProperties(Server.prototype, {
  pid: {
    value: process.pid,
    configurable: false,
    enumerable: false
  },
  env: {
    value: process.env,
    configurable: false,
    enumerable: false
  }
});

methods.forEach(method => {
  // method is lowercase all ready
  Object.defineProperty(Server.prototype, method, {
    value: function(url, handler) {
      const newRouter = new Router();
      const routerDefiner = newRouter[method];
      if (!routerDefiner) throw new Error(`Not support the method ${method}`);
      routerDefiner.call(newRouter, url, handler);
      return this.use(newRouter.routes());
    }
  });
});

Object.freeze(Server);
Object.freeze(Server.prototype);

module.exports = Server;
