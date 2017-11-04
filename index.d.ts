import * as KoaApplication from 'koa';
import Router from 'koa-router';

interface KorConstructor {
  new (): Kor;
}

interface Kor extends KoaApplication {
  get(path: string | RegExp, ...middleware: Array<Router.IMiddleware>): Kor;
  post(path: string | RegExp, ...middleware: Array<Router.IMiddleware>): Kor;
  put(path: string | RegExp, ...middleware: Array<Router.IMiddleware>): Kor;
  ['delete'](
    path: string | RegExp,
    ...middleware: Array<Router.IMiddleware>
  ): Kor;
  options(path: string | RegExp, ...middleware: Array<Router.IMiddleware>): Kor;
  head(path: string | RegExp, ...middleware: Array<Router.IMiddleware>): Kor;
  trace(path: string | RegExp, ...middleware: Array<Router.IMiddleware>): Kor;
  copy(path: string | RegExp, ...middleware: Array<Router.IMiddleware>): Kor;
  lock(path: string | RegExp, ...middleware: Array<Router.IMiddleware>): Kor;
  mkcol(path: string | RegExp, ...middleware: Array<Router.IMiddleware>): Kor;
  move(path: string | RegExp, ...middleware: Array<Router.IMiddleware>): Kor;
  purge(path: string | RegExp, ...middleware: Array<Router.IMiddleware>): Kor;
  propfind(
    path: string | RegExp,
    ...middleware: Array<Router.IMiddleware>
  ): Kor;
  proppatch(
    path: string | RegExp,
    ...middleware: Array<Router.IMiddleware>
  ): Kor;
  unlock(path: string | RegExp, ...middleware: Array<Router.IMiddleware>): Kor;
  report(path: string | RegExp, ...middleware: Array<Router.IMiddleware>): Kor;
  mkactivity(
    path: string | RegExp,
    ...middleware: Array<Router.IMiddleware>
  ): Kor;
  checkout(
    path: string | RegExp,
    ...middleware: Array<Router.IMiddleware>
  ): Kor;
  merge(path: string | RegExp, ...middleware: Array<Router.IMiddleware>): Kor;
  ['m-search'](
    path: string | RegExp,
    ...middleware: Array<Router.IMiddleware>
  ): Kor;
  notify(path: string | RegExp, ...middleware: Array<Router.IMiddleware>): Kor;
  subscribe(
    path: string | RegExp,
    ...middleware: Array<Router.IMiddleware>
  ): Kor;
  unsubscribe(
    path: string | RegExp,
    ...middleware: Array<Router.IMiddleware>
  ): Kor;
  patch(path: string | RegExp, ...middleware: Array<Router.IMiddleware>): Kor;
  search(path: string | RegExp, ...middleware: Array<Router.IMiddleware>): Kor;
  connect(path: string | RegExp, ...middleware: Array<Router.IMiddleware>): Kor;
  all(path: string | RegExp, ...middleware: Array<Router.IMiddleware>): Kor;
  route(path: string | RegExp, ...middleware: Array<Router.IMiddleware>): Kor;
}

declare module '@axetroy/kor' {
  const Kor: KorConstructor;
  const Router: Router;
  export { Router };
  export default Kor;
}
