/*
 * @Description:
 * @Author: Hexon
 * @Date: 2020-05-07 16:23:49
 * @LastEditors: Hexon
 * @LastEditTime: 2020-05-07 18:06:37
 */

'use strict';
const Controller = require('egg').Controller;

class UserController extends Controller {
  async login(params) {
    const ctx = this.ctx;
    const { username, password } = ctx.request.body;
    // 1. 判断username是否存在
    const { success, status } = ctx.service.user.login({
      account: username,
      password,
    });
    // 2. 判断密码是否正确
    if (!success) {
      return {
        status,
      };
    }

  }

}

module.exports = UserController;
