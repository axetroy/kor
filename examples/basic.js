const Kor = require('../index');

new Kor()
  .use(function(ctx) {
    ctx.body = 'hello world';
  })
  .listen(8080);
