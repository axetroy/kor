const Kor = require('../index');

new Kor()
  .get('/', function(ctx) {
    ctx.body = 'hello world';
  })
  .post('/login', function(ctx) {
    ctx.body = 'login success!';
  })
  .listen(8080);
