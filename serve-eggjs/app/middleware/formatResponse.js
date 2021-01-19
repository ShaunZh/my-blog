'use strict';
module.exports = () => {
  return async (ctx, next) => {
    await next();
    console.log('ctx: ', ctx);
    const { response } = ctx;
    if (response.status >= 200 && response.status < 400) {
      const body = ctx.body;
      ctx.body = {
        code: 200,
        message: '',
        data: body,
      };
    } else {
      ctx.throw(response.status, response.message);
    }
  };
};
