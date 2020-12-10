/*
 * @Description: 临时文件
 * @Author: Hexon
 * @Date: 2020-05-28 15:29:51
 * @LastEditors: Hexon
 * @LastEditTime: 2020-06-15 15:00:57
 */
'use strict';

const Mockjs = require('mockjs');

const Controller = require('egg').Controller;

class Temp extends Controller {
  async index() {
    const ctx = this.ctx;
    const auth = ctx.isAuthenticated();
    console.log('ttt', ctx);
    if (auth) {
      console.log('temp index: ', this.ctx.user);
      ctx.body = Mockjs.mock({
        'list|1-10': [
          {
            headImg: 'https://via.placeholder.com/64x64',
            nickname: '@name',
            content: '@csentence',
          },
        ],
      });
    } else {
      ctx.status = 304;
      ctx.message = '密码错误';
      // this.ctx.throw(304, '密码错误');
    }
  }
}

module.exports = Temp;
