const Koa = require('koa');
const Router = require('koa-router');
const methods = require('methods');
const router = new Router();

const KOA = Symbol('koa instance');

class Server {
  constructor() {
    this[KOA] = new Koa();
  }
  get koa() {
    return this[KOA];
  }
  use(middleware) {
    this[KOA].use(middleware);
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
    return this[KOA].listen(port);
  }
}

methods.forEach(method => {
  Object.defineProperty(Server.prototype, method, {
    value: function(url, handler) {
      const newRouter = new Router();

      const routerDefiner = newRouter[method.toLowerCase()];

      if (!routerDefiner) throw new Error(`Not support the method ${method}`);

      routerDefiner(url, handler);
      return this.use(newRouter.routes());
    }
  });
});

Object.freeze(Server);
Object.freeze(Server.prototype);

module.exports = Server;
