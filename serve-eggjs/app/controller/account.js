/*
 * @Description:
 * @Author: Hexon
 * @Date: 2020-05-08 15:26:08
 * @LastEditors: Hexon
 * @LastEditTime: 2020-06-10 17:37:06
 */
'use strict';
const Controller = require('egg').Controller;

const loginRule = {
  account: 'string',
  password: 'string',
};

const registerRule = {
  account: 'string',
  password: 'string',
  confirm: 'string',
};

class AccountController extends Controller {
  async login() {
    try {
      const ctx = this.ctx;
      // 校验参数
      ctx.validate(loginRule, ctx.request.body);
      const { account, password } = ctx.request.body;
      // 1. 判断username是否存在
      const { success, accessToken } = await ctx.service.user.login({
        account,
        password,
      });
      // 2. 判断密码是否正确
      if (success) {
        ctx.body = {
          Authorization: accessToken,
        };
      }
    } catch (err) {
      this.ctx.throw(err.status, err.message);
    }
  }
  async register() {
    try {
      const ctx = this.ctx;
      ctx.validate(registerRule, ctx.request.body);
      const { account, password, confirm } = ctx.request.body;
      const { success } = await ctx.service.user.register({
        account,
        password,
        confirm,
      });
      if (success) {
        ctx.status = 201;
      }
    } catch (err) {
      this.ctx.throw(err.status, err.message);
    }
  }
}

module.exports = AccountController;
