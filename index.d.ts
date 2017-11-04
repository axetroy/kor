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
  route(path: string | RegExp, ...middleware: Array<Router.IMiddleware>): Kor;
}

declare module '@axetroy/kor' {
  const Kor: KorConstructor;
  export default Kor;
}
