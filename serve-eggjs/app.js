/*
 * @Description:
 * @Author: Hexon
 * @Date: 2020-06-10 18:51:36
 * @LastEditors: Hexon
 * @LastEditTime: 2020-06-11 13:55:57
 */
// app.js
'use strict';
const LocalStrategy = require('passport-local').Strategy;

module.exports = app => {
  // 挂载 strategy
  app.passport.use(new LocalStrategy({
    passReqToCallback: true,
  }, (req, username, password, done) => {

    console.log('app: ttt1111111');
    // format user
    const user = {
      provider: 'local',
      username,
      password,
    };
    console.log('%s %s get user: %j', req.method, req.url, user);
    app.passport.doVerify(req, user, done);
  }));

  // 处理用户信息
  app.passport.verify(async (ctx, user) => {
    console.log('verify');
    return user;
  });
  app.passport.serializeUser(async (ctx, user) => {
    console.log('serializeUser');
    return user;
  });
  app.passport.deserializeUser(async (ctx, user) => {

    console.log('deserializeUser');
    return user;
  });
};
