/// <reference types="koa" />
/// <reference types="koa-router" />

import * as KoaApplication from 'koa';
import * as Router from 'koa-router';

declare interface KorRouter {
  new (): Router;
}

declare interface KorConstructor {
  new (): KorInterface;
  Router: KorRouter;
}

declare interface KorInterface extends KoaApplication {
  get(
    path: string | RegExp,
    ...middleware: Array<Router.IMiddleware>
  ): KorInterface;
  post(
    path: string | RegExp,
    ...middleware: Array<Router.IMiddleware>
  ): KorInterface;
  put(
    path: string | RegExp,
    ...middleware: Array<Router.IMiddleware>
  ): KorInterface;
  ['delete'](
    path: string | RegExp,
    ...middleware: Array<Router.IMiddleware>
  ): KorInterface;
  options(
    path: string | RegExp,
    ...middleware: Array<Router.IMiddleware>
  ): KorInterface;
  head(
    path: string | RegExp,
    ...middleware: Array<Router.IMiddleware>
  ): KorInterface;
  trace(
    path: string | RegExp,
    ...middleware: Array<Router.IMiddleware>
  ): KorInterface;
  copy(
    path: string | RegExp,
    ...middleware: Array<Router.IMiddleware>
  ): KorInterface;
  lock(
    path: string | RegExp,
    ...middleware: Array<Router.IMiddleware>
  ): KorInterface;
  mkcol(
    path: string | RegExp,
    ...middleware: Array<Router.IMiddleware>
  ): KorInterface;
  move(
    path: string | RegExp,
    ...middleware: Array<Router.IMiddleware>
  ): KorInterface;
  purge(
    path: string | RegExp,
    ...middleware: Array<Router.IMiddleware>
  ): KorInterface;
  propfind(
    path: string | RegExp,
    ...middleware: Array<Router.IMiddleware>
  ): KorInterface;
  proppatch(
    path: string | RegExp,
    ...middleware: Array<Router.IMiddleware>
  ): KorInterface;
  unlock(
    path: string | RegExp,
    ...middleware: Array<Router.IMiddleware>
  ): KorInterface;
  report(
    path: string | RegExp,
    ...middleware: Array<Router.IMiddleware>
  ): KorInterface;
  mkactivity(
    path: string | RegExp,
    ...middleware: Array<Router.IMiddleware>
  ): KorInterface;
  checkout(
    path: string | RegExp,
    ...middleware: Array<Router.IMiddleware>
  ): KorInterface;
  merge(
    path: string | RegExp,
    ...middleware: Array<Router.IMiddleware>
  ): KorInterface;
  ['m-search'](
    path: string | RegExp,
    ...middleware: Array<Router.IMiddleware>
  ): KorInterface;
  notify(
    path: string | RegExp,
    ...middleware: Array<Router.IMiddleware>
  ): KorInterface;
  subscribe(
    path: string | RegExp,
    ...middleware: Array<Router.IMiddleware>
  ): KorInterface;
  unsubscribe(
    path: string | RegExp,
    ...middleware: Array<Router.IMiddleware>
  ): KorInterface;
  patch(
    path: string | RegExp,
    ...middleware: Array<Router.IMiddleware>
  ): KorInterface;
  search(
    path: string | RegExp,
    ...middleware: Array<Router.IMiddleware>
  ): KorInterface;
  connect(
    path: string | RegExp,
    ...middleware: Array<Router.IMiddleware>
  ): KorInterface;
  all(
    path: string | RegExp,
    ...middleware: Array<Router.IMiddleware>
  ): KorInterface;
  route(
    path: string | RegExp,
    ...middleware: Array<Router.IMiddleware>
  ): KorInterface;
}

declare const Kor: KorConstructor;
declare const Router: KorRouter;

export default Kor;

export { Kor, Router };
