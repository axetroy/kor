const Kor = require('../index');

new Kor()
  .use((ctx, next) => {
    // an middleware
    next();
  })
  .use(ctx => {
    // this is a middleware too
    // it should catch all request
    ctx.body = 'hello world';
  })
  .listen(8080);
