'use strict';

const Service = require('egg').Service;

class Post extends Service {
  async index(query) {
    return await this.ctx.model.Post.findAll(query);
  }

  async create(info) {
    return await this.ctx.model.Post.create(info);
  }

  async getPostById(id) {
    return await this.ctx.model.Post.findByPk(id);
  }

  async update(info) {
    return await this.ctx.model.Post.update({
      ...info,
    }, {
      where: {
        id: info.id,

      },
    });
  }

  async delete(id) {
    return await this.ctx.model.Post.destroy({
      where: {
        id,
      },
    });
  }
}

module.exports = Post;
