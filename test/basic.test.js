const request = require('supertest');
const assert = require('assert');
const Kor = require('../index');

test('Basic get', done => {
  const app = new Kor();
  const body = { word: 'hello world' };
  app.get('/say', ctx => {
    ctx.body = body;
  });
  const http = app.listen();
  request(http)
    .get('/say')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function(err, res) {
      assert.deepEqual(res.body, body);
      http.close();
      done(err);
    });
});

test('Basic post', done => {
  const app = new Kor();
  const body = { word: 'hello world' };
  app.post('/say', ctx => {
    ctx.body = body;
  });
  const http = app.listen();
  request(http)
    .post('/say')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function(err, res) {
      assert.deepEqual(res.body, body);
      http.close();
      done(err);
    });
});

test('Basic put', done => {
  const app = new Kor();
  const body = { word: 'hello world' };
  app.put('/say', ctx => {
    ctx.body = body;
  });
  const http = app.listen();
  request(http)
    .put('/say')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function(err, res) {
      assert.deepEqual(res.body, body);
      http.close();
      done(err);
    });
});

test('Basic delete', done => {
  const app = new Kor();
  const body = { word: 'hello world' };
  app.delete('/say', ctx => {
    ctx.body = body;
  });
  const http = app.listen();
  request(http)
    .delete('/say')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function(err, res) {
      assert.deepEqual(res.body, body);
      http.close();
      done(err);
    });
});
