/*
 * @Description: 临时文件
 * @Author: Hexon
 * @Date: 2020-05-28 15:29:51
 * @LastEditors: Hexon
 * @LastEditTime: 2020-06-03 11:02:08
 */
'use strict';

const Mockjs = require('mockjs');

const Controller = require('egg').Controller;

class Temp extends Controller {
  async index() {
    const ctx = this.ctx;
    ctx.body = Mockjs.mock({
      'list|1-10': [
        {
          headImg: 'https://via.placeholder.com/64x64',
          nickname: '@name',
          content: '@csentence',
        },
      ],
    });
  }
}

module.exports = Temp;
