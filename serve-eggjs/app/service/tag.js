/*
 * @Description:
 * @Author: Hexon
 * @Date: 2020-05-07 14:01:39
 * @LastEditors: Hexon
 * @LastEditTime: 2020-06-19 16:25:16
 */

'use strict';
const Service = require('egg').Service;

class TagService extends Service {
  async index(query) {
    return await this.ctx.model.Tag.findAndCountAll(query);
  }
  async create(info) {
    return await this.ctx.model.Tag.create(info);
  }
  async update(info) {
    const { id, name } = info;
    return await this.ctx.model.Tag.update(
      {
        name,
      },
      {
        where: {
          id,
        },
      },
    );
  }

  async getTagById(id) {
    return await this.ctx.model.Tag.findByPk(id);
  }

  async delete(id) {
    return await this.ctx.model.Tag.destory({
      where: {
        id,
      },
    });
  }
}

module.exports = TagService;
