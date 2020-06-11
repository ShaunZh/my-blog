'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.resources('tag', '/tag', controller.tag);
  router.resources('user', '/user', controller.user);
  // router.post('/account/login', controller.account.login);
  router.post('/account/register', controller.account.register);
  // router.resources('temp', '/temp', controller.temp);
  router.get('/loginCallback', controller.temp.index);

  const localStrategy = app.passport.authenticate('local', { successRedirect: '/loginCallback' });
  router.post('/account/login', localStrategy);
  // router.post('/account/account', home.localPassport);
  // router.get('/loginCallback', home.loginCallback);

};
