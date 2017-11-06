import * as KoaApplication from 'koa';
import * as KoaRouter from 'koa-router';

declare interface KorRouter extends KoaRouter {}

interface KorRouterConstructor extends KoaRouter {
  new (): KoaRouter;
}

declare interface KorConstructor {
  new (): KorInterface;
  Router: KorRouter;
}

declare interface KorInterface extends KoaApplication {
  get(
    path: string | RegExp,
    ...middleware: Array<KoaRouter.IMiddleware>
  ): KorInterface;
  post(
    path: string | RegExp,
    ...middleware: Array<KoaRouter.IMiddleware>
  ): KorInterface;
  put(
    path: string | RegExp,
    ...middleware: Array<KoaRouter.IMiddleware>
  ): KorInterface;
  ['delete'](
    path: string | RegExp,
    ...middleware: Array<KoaRouter.IMiddleware>
  ): KorInterface;
  options(
    path: string | RegExp,
    ...middleware: Array<KoaRouter.IMiddleware>
  ): KorInterface;
  head(
    path: string | RegExp,
    ...middleware: Array<KoaRouter.IMiddleware>
  ): KorInterface;
  trace(
    path: string | RegExp,
    ...middleware: Array<KoaRouter.IMiddleware>
  ): KorInterface;
  copy(
    path: string | RegExp,
    ...middleware: Array<KoaRouter.IMiddleware>
  ): KorInterface;
  lock(
    path: string | RegExp,
    ...middleware: Array<KoaRouter.IMiddleware>
  ): KorInterface;
  mkcol(
    path: string | RegExp,
    ...middleware: Array<KoaRouter.IMiddleware>
  ): KorInterface;
  move(
    path: string | RegExp,
    ...middleware: Array<KoaRouter.IMiddleware>
  ): KorInterface;
  purge(
    path: string | RegExp,
    ...middleware: Array<KoaRouter.IMiddleware>
  ): KorInterface;
  propfind(
    path: string | RegExp,
    ...middleware: Array<KoaRouter.IMiddleware>
  ): KorInterface;
  proppatch(
    path: string | RegExp,
    ...middleware: Array<KoaRouter.IMiddleware>
  ): KorInterface;
  unlock(
    path: string | RegExp,
    ...middleware: Array<KoaRouter.IMiddleware>
  ): KorInterface;
  report(
    path: string | RegExp,
    ...middleware: Array<KoaRouter.IMiddleware>
  ): KorInterface;
  mkactivity(
    path: string | RegExp,
    ...middleware: Array<KoaRouter.IMiddleware>
  ): KorInterface;
  checkout(
    path: string | RegExp,
    ...middleware: Array<KoaRouter.IMiddleware>
  ): KorInterface;
  merge(
    path: string | RegExp,
    ...middleware: Array<KoaRouter.IMiddleware>
  ): KorInterface;
  ['m-search'](
    path: string | RegExp,
    ...middleware: Array<KoaRouter.IMiddleware>
  ): KorInterface;
  notify(
    path: string | RegExp,
    ...middleware: Array<KoaRouter.IMiddleware>
  ): KorInterface;
  subscribe(
    path: string | RegExp,
    ...middleware: Array<KoaRouter.IMiddleware>
  ): KorInterface;
  unsubscribe(
    path: string | RegExp,
    ...middleware: Array<KoaRouter.IMiddleware>
  ): KorInterface;
  patch(
    path: string | RegExp,
    ...middleware: Array<KoaRouter.IMiddleware>
  ): KorInterface;
  search(
    path: string | RegExp,
    ...middleware: Array<KoaRouter.IMiddleware>
  ): KorInterface;
  connect(
    path: string | RegExp,
    ...middleware: Array<KoaRouter.IMiddleware>
  ): KorInterface;
  all(
    path: string | RegExp,
    ...middleware: Array<KoaRouter.IMiddleware>
  ): KorInterface;
  route(path: string | RegExp, KorRouter): KorInterface;
}

declare const Kor: KorConstructor;
declare const Router: KorRouterConstructor;

export default Kor;

export { Kor, Router };
