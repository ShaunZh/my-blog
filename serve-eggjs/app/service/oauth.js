/*
 * @Description:
 * @Author: Hexon
 * @Date: 2020-05-07 18:37:16
 * @LastEditors: Hexon
 * @LastEditTime: 2020-06-18 10:14:09
 */

'use strict';
const Service = require('egg').Service;
const dayjs = require('dayjs');

class OauthService extends Service {
  async create(info) {
    const { userId } = info;
    console.log('create token info: ', info);
    // 过期时间
    const expiresDateTime = dayjs().add(7, 'day').format('YYYY-MM-DD HH:mm:ss');
    // 生成access token
    const accessToken = this.app.jwt.sign({ userId }, this.app.config.jwt.secret, {
      algorithm: this.app.config.jwt.algorithm,
      expiresIn: this.app.config.jwt.expiresIn,
    });
    await this.ctx.model.OauthToken.create({
      user_id: userId,
      access_token: accessToken,
      access_token_expires_at: expiresDateTime,
    });
    return accessToken;
  }
  async getOauthByUserIdAndToken(info) {
    const { userId, accessToken } = info;
    return await this.ctx.model.OauthToken.findOne({
      where: {
        user_id: userId,
        access_token: accessToken,
      },
    });
  }

}


module.exports = OauthService;
