/*
 * @Description:
 * @Author: Hexon
 * @Date: 2020-05-07 18:37:16
 * @LastEditors: Hexon
 * @LastEditTime: 2020-05-08 14:26:48
 */

'use strict';
const Service = require('egg').Service;

class OauthService extends Service {
  async create(info) {
    // const { id, userId, accessToken, accessTokenExpiresAt } = info;
    console.log('create token info: ', info);
    await this.ctx.model.OauthToken.create(info);
  }
}


module.exports = OauthService;
