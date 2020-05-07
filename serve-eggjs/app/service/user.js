/*
 * @Description:
 * @Author: Hexon
 * @Date: 2020-05-07 14:44:30
 * @LastEditors: Hexon
 * @LastEditTime: 2020-05-07 18:03:41
 */
'use strict';
const Service = require('egg').Service;

class UserService extends Service {
  async login(params) {
    const { account, password } = params;
    const ctx = this.ctx;

    const user = ctx.model.findOne({
      where: {
        account,
      },
    });
    // 用户不存在
    if (!user) {
      return {
        success: false,
        status: 404,
      };
    }
    // 密码错误
    if (user.password === password) {
      return {
        scuccess: false,
        status: 422,
      };
    }
    return {
      success: true,
    };

  }
}

module.exports = UserService;
