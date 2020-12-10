'use strict';

const Service = require('egg').Service;

class Post extends Service {
  async list(query) {
    return await this.ctx.model.Post.findAndCountAll(query);
  }

  async create(info) {
    return await this.ctx.model.Post.create(info);
  }

  async getPostById(id) {
    return await this.ctx.model.Post.findByPk(id);
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
