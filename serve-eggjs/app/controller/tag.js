/*
 * @Description:
 * @Author: Hexon
 * @Date: 2020-05-06 17:32:06
 * @LastEditors: Hexon
 * @LastEditTime: 2020-05-08 15:21:07
 */
'use strict';

const toInt = require('../../utils/tools').toInt;
const Controller = require('egg').Controller;

class TagController extends Controller {
  async index() {
    const ctx = this.ctx;
    const query = { limit: toInt(ctx.query.limit), offset: toInt(ctx.query.offset) };
    ctx.body = ctx.service.tag.index(query);
  }

  async create() {
    const ctx = this.ctx;
    const { name } = ctx.request.body;
    const tag = await ctx.service.tag.create({ name });
    ctx.status = 201; // 201 created: 表示请求已被实现
    ctx.body = tag;
  }

  async update() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    const params = {
      name: ctx.request.params,
    };

    const { success, tag } = await ctx.service.tag.update({
      id,
      params,
    });
    if (!success) {
      ctx.status = 404;
      return;
    }
    ctx.status = 204;
    ctx.body = tag;
  }

  async destory() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);

    const { success } = await ctx.service.tag.destory(id);
    if (!success) {
      ctx.status = 404;
      return;
    }
    ctx.status = 200;
  }
}

module.exports = TagController;
