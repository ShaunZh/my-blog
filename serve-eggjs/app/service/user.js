/*
 * @Description:
 * @Author: Hexon
 * @Date: 2020-05-07 14:44:30
 * @LastEditors: Hexon
 * @LastEditTime: 2020-06-19 15:47:36
 */
'use strict';
const Service = require('egg').Service;
const dayjs = require('dayjs');
const utility = require('utility');
// const { Op } = require('sequelize');
class UserService extends Service {
  async login(params) {
    const { account, password } = params;
    const ctx = this.ctx;
    const user = await ctx.model.User.findOne({
      where: {
        account,
      },
    });

    // 用户不存在
    if (!user) {
      // throw new Error('账号不存在');
      ctx.throw(404, '账号不存在');
    }
    // 密码错误
    if (user.password !== password) {
      ctx.throw(422, '密码错误');
    }
    // 过期时间
    const accessTokenExpiresAt = dayjs(
      Date.now + 60 * 60 * 1000,
      'YYYY-MM-DD hh:mm',
    );
    // 生成access token
    const accessToken = this.app.jwt.sign(
      { account, password, exp: Math.floor(Date.now() / 1000) + 60 * 60 },
      this.app.config.jwt.secret,
    );
    // 存储access token 到oauth表中
    await ctx.service.oauth.create({
      userId: user.id,
      accessToken,
      accessTokenExpiresAt,
    });
    return {
      success: true,
      accessToken,
    };
  }

  async create(username, passhash, email, avatarUrl) {
    const ctx = this.ctx;
    return await ctx.model.User.create({
      username,
      passhash,
      email,
      avatar: avatarUrl,
    });
  }
  async getUsersByQuery(query) {
    return await this.ctx.model.User.findAll({
      where: query,
    });
  }

  makeGravatar(email) {
    return (
      'http://www.gravatar.com/avatar/' +
      utility.md5(email.toLowerCase()) +
      '?size=48'
    );
  }

  async getUserByLoginName(username) {
    return await this.ctx.model.User.findOne({
      where: {
        username,
      },
    });
  }

  async getUserById(id) {
    if (!id) {
      return null;
    }

    return await this.ctx.model.User.findOne({
      id,
    });
  }

  async getUserByToken(token) {
    if (!token) {
      return null;
    }
  }
}

module.exports = UserService;
