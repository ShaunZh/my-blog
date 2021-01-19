/*
 * @Description:
 * @Author: Hexon
 * @Date: 2020-06-16 18:35:04
 * @LastEditors: Hexon
 * @LastEditTime: 2021-01-18 18:25:31
 */
'use strict';

module.exports = (app) => {
  return async (ctx, next) => {
    // 1. 获取accessToken
    let accessToken = '';
    if (ctx.headers.authorization && ctx.headers.authorization.split(' ')[0] === 'Bearer') {
      accessToken = ctx.headers.authorization.split(' ')[1];
    }
    if (!accessToken) {
      ctx.throw(401, '无权限');
    }
    // 2. 解析accessToken
    try {
      const decode = app.jwt.verify(accessToken, app.config.jwt.secret);
      const userId = decode.userId;
      // 根据id获取accessToken，并比较accessToken是否相等，如果相等则通过
      const oauth = await ctx.service.oauth.getOauthByUserIdAndToken({
        userId,
        accessToken,
      });
      if (!oauth) {
        ctx.throw(401, 'token 无效');
      }
    } catch (err) {
      const message = {
        TokenExpiredError: 'token 过期',
        JsonWebTokenError: 'token 无效',
      }[err.name];
      ctx.throw(401, message || 'token 无效');
    }
    await next();
  };
};
