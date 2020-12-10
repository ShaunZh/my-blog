/*
 * @Description:
 * @Author: Hexon
 * @Date: 2020-06-10 18:51:36
 * @LastEditors: Hexon
 * @LastEditTime: 2020-06-16 10:08:41
 */
// app.js
'use strict';
const LocalStrategy = require('passport-local').Strategy;

module.exports = app => {

  const localHandle = async (ctx, { username, password }) => {
    const getUser = username => {
      if (username.indexOf('@') > -1) {
        return ctx.service.user.getUserByEmail(username);
      }
      return ctx.service.user.getUserByLoginName(username);
    };
    // 1. 根据email 和 username 获取用户
    const existUser = await getUser(username);
    if (!existUser) {
      ctx.throw(422, '用户名或邮箱不存在');
    }
    // 2. 比较密码
    const passhash = existUser.passhash;
    const equal = ctx.helper.bcompare(password, passhash);
    if (!equal) {
      ctx.throw(422, '密码错误');
      // return null;
    }
    // 3. 如果是需要邮箱激活，则可以加一步邮箱激活验证
    // if (!existUser.active) {
    //   return null
    // }

    return existUser;

  };
  // 挂载 strategy
  app.passport.use('local', new LocalStrategy({
    passReqToCallback: true,
  }, (req, username, password, done) => {

    console.log('app: ttt1111111');
    // format user
    const user = {
      provider: 'local',
      username,
      password,
    };
    // console.log('%s %s get user: %j', req.method, req.url, user);
    app.passport.doVerify(req, user, done);
    // return user;
  }));

  // 处理用户信息
  app.passport.verify(async (ctx, user) => {
    const handler = localHandle;
    const existUser = await handler(ctx, user);
    if (existUser) {
      const authToken = existUser.id + '$$$$';
      const opt = {
        maxAge: 1000 * 60 * 60 * 24 * 30, // 30天
        signed: true,
        httpOnly: true,
      };
      // 设置cookie
      ctx.cookies.set(app.config.authCookieName, authToken, opt);
    }

    return existUser;
  });
  // return 的值会被保存在在session中
  app.passport.serializeUser(async (ctx, user) => {
    return user.id;
  });
  app.passport.deserializeUser(async (ctx, user) => {
    if (user) {
      const authToken = ctx.cookies.get(app.config.authCookieName, {
        signed: true,
      });
      if (!authToken) {
        return user;
      }
      const auth = authToken.split('$$$$');
      const userId = auth[0];
      user = await ctx.service.user.getUserById(userId);
      if (!user) {
        return user;
      }
    }
    return user;
  });
};
