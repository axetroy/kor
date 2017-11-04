const Kor = require('../index');
const Router = require('koa-router');

const route = Router();

route.get('/now', ctx => {
  ctx.body = Date.now();
});

route.post('/register', ctx => {
  // do something
  ctx.body = 'register success!';
});

route.get('/info', ctx => {
  ctx.body = 'here is your user information';
});

const app = new Kor();

app
  .use((ctx, next) => {
    // an middleware
    next();
  })
  .get('/say/:word', ctx => {
    ctx.body = `Hello ${ctx.params.word}`;
  })
  .route('/api/v1', route)
  .use(function NotFound(ctx) {
    ctx.body = '404 Not Found';
  })
  .listen(8080);
