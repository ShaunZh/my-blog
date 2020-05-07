/*
 * @Description:
 * @Author: Hexon
 * @Date: 2020-05-07 14:01:39
 * @LastEditors: Hexon
 * @LastEditTime: 2020-05-07 14:27:16
 */

'use strict';
const Service = require('egg').Service;

class TagService extends Service {
  async index(query) {
    const tags = await this.ctx.model.Tag.findAll(query);
    return tags;
  }
  async create(info) {
    const tag = await this.ctx.model.Tag.create(info);
    return tag;
  }
  async update(info) {
    const { id, params } = info;
    const tag = await this.ctx.model.Tag.findByPk(id);
    if (!tag) {
      return {
        success: false,
      };
    }
    await tag.update(params);
    return {
      success: true,
      tag,
    };
  }
  async destory(id) {
    const tag = await this.ctx.model.Tag.findByPk(id);
    if (!tag) {
      return {
        success: false,
      };
    }
    await tag.destory();
    return {
      success: true,
    };
  }
}


module.exports = TagService;
