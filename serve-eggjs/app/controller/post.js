'use strict';

// const validator = require('validator');
const Controller = require('egg').Controller;

const toInt = require('../../utils/tools').toInt;
class PostController extends Controller {
  async list() {
    const { ctx, service } = this;
    const query = {
      limit: toInt(ctx.request.body.limit || 10),
      offset: toInt(ctx.request.body.offset || 10),
    };
    ctx.body = await service.post.index(query);
    ctx.status = 200;
  }

  async create() {
    const { ctx, service } = this;
    const { title, content, tagName } = ctx.request.body;
  }
}

module.exports = PostController;
