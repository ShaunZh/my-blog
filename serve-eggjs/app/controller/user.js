/*
 * @Description:
 * @Author: Hexon
 * @Date: 2020-05-07 16:23:49
 * @LastEditors: Hexon
 * @LastEditTime: 2020-06-09 17:29:38
 */

'use strict';
const Controller = require('egg').Controller;

const loginRule = {
  account: 'string',
  password: 'string',
};

class UserController extends Controller {
  async login() {
    try {

      console.log('login');
      const ctx = this.ctx;
      // 校验参数
      ctx.validate(loginRule, ctx.request.body);
      const { account, password } = ctx.request.body;
      // 1. 判断username是否存在
      const { success, accessToken } = ctx.service.user.login({
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
      console.log('login catch: ', err);
    }
  }

}

module.exports = UserController;
