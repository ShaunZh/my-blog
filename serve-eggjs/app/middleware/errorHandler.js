/*
 * @Description:
 * @Author: Hexon
 * @Date: 2020-05-07 18:10:04
 * @LastEditors: Hexon
 * @LastEditTime: 2020-06-11 14:05:54
 */
'use strict';
module.exports = () => {
  return async function errorHandler(ctx, next) {
    try {
      await next();
    } catch (err) {
      console.log('eeeeeee:', err);
      // 所有的异常都在 app 上触发一个 error 事件，框架会记录一条错误日志
      ctx.app.emit('error', err, ctx);
      const status = err.status || 500;
      // 生产环境时 500 错误的详细错误内容不返回给客户端，因为可能包含敏感信息
      const message = err.message === 'Validation Failed' ? ctx.__(err.message) : err.message;
      const error = status === 500 && ctx.app.config.env === 'prod'
        ? 'Internel Server Error'
        : message;
      // 从 error 对象上读出各个属性，设置到响应中
      ctx.body = { error };
      if (status === 402) {
        ctx.body.detail = err.errors;
      }
      ctx.status = status;

    }
  };
};
