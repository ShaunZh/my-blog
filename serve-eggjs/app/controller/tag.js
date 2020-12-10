/*
 * @Description:
 * @Author: Hexon
 * @Date: 2020-05-06 17:32:06
 * @LastEditors: Hexon
 * @LastEditTime: 2020-06-19 16:26:00
 */
'use strict';
const Controller = require('egg').Controller;

const toInt = require('../../utils/tools').toInt;
const formatDateTime = require('../../utils/tools').formatDateTime;

class TagController extends Controller {
  async index() {
    const ctx = this.ctx;
    const query = {
      limit: toInt(ctx.query.limit),
      offset: toInt(ctx.query.offset),
    };
    ctx.body = await ctx.service.tag.index(query);
    ctx.status = 200;
  }

  async create() {
    const ctx = this.ctx;
    const { name } = ctx.request.body;
    if (!name) {
      ctx.throw(422, '请输入标签名');
    }

    const dateTime = formatDateTime(Date.now());
    await ctx.service.tag.create({ name, create_at: dateTime });
    ctx.status = 201; // 201 created: 表示请求已被实现
  }

  async update() {
    const ctx = this.ctx;
    let { id, name } = ctx.request.body;
    id = toInt(id);
    const tag = await ctx.service.tag.getTagById(id);
    if (!tag) {
      ctx.throw(422, '标签不存在');
    }
    await ctx.service.tag.update({
      id,
      name,
    });

    ctx.status = 200;
  }

  async delete() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);

    await ctx.service.tag.destory(id);
    ctx.status = 200;
  }
}

module.exports = TagController;
