const Kor = require('../index');
const Router = require('koa-router');

const userRoute = Router();

userRoute
  .get('/', ctx => {
    ctx.body = `hey! It's user API`;
  })
  .head('/auth', ctx => {
    ctx.body = 'Auth success!';
  })
  .get('/info', ctx => {
    ctx.body = 'here is your user information';
  })
  .post('/register', ctx => {
    ctx.body = 'register success!';
  })
  .put('/info', ctx => {
    ctx.body = 'Update user information success!';
  })
  .delete('/addFriend/:username', ctx => {
    ctx.body = `Add friend ${ctx.params.username} success!`;
  });

const commonRoute = Router();

commonRoute
  .get('/', ctx => {
    ctx.body = `hey! It's common API`;
  })
  .get('/now', ctx => {
    ctx.body = Date.now();
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
  .route('/api/v1/common', commonRoute)
  .route('/api/v1/user', userRoute)
  .use(function NotFound(ctx) {
    ctx.body = '404 Not Found';
  })
  .listen(8080, function() {
    console.info(`Listen on 8080`);
  });
