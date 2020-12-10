/*
 * @Description:
 * @Author: Hexon
 * @Date: 2020-06-11 15:33:35
 * @LastEditors: Hexon
 * @LastEditTime: 2020-08-09 17:52:07
 */

'use strict';
module.exports = (app) => {
  const { router, controller, middleware } = app;
  router.get('/', controller.home.index);
  // router.post('/account/login', controller.account.login);
  router.post('/account/register', controller.account.register);
  // router.resources('temp', '/temp', controller.temp);
  router.get('/loginCallback', controller.temp.index);

  // const localStrategy = app.passport.authenticate('local', { successRedirect: '/loginCallback', failureRedirect: '/loginCallback' });
  router.post('/sign/signin', controller.sign.signin);
  router.post('/sign/signup', controller.sign.signup);

  router.get('/tag/index', controller.tag.index);
  router.post(
    '/tag/create',
    middleware.tokenRequired(app),
    controller.tag.create,
  );
  router.post('/tag/update', controller.tag.update);
  router.post('/tag/delete', controller.tag.delete);

  // post
  router.get('/post', controller.post.list);
};
