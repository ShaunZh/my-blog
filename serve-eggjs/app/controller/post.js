'use strict';

// const validator = require('validator');
const Controller = require('egg').Controller;
const Sequelize = require('sequelize');
const formatDateTime = require('../../utils/tools').formatDateTime;

const toInt = require('../../utils/tools').toInt;
class PostController extends Controller {
  async index() {
    const { ctx, service } = this;
    const {
      page = { pageSize: 10, pageIndex: 1 },
      data = {
        keywords: '', tag: '',
        createStartDate: '', createEndDate: '', updateStartDate: '', updateEndDate: '',
      } } = ctx.request.body;
    const Op = Sequelize.Op;
    const query = {
      limit: toInt(page.pageSize || 10),
      offset: toInt((page.pageIndex - 1) * page.pageSize),
    };
    const where = {};
    if (data.tag) {
      where.tag_id = data.tag;
    }
    if (data.keywords) {
      where.title = {
        [Op.like]: `%${data.keywords}%`,
      };
    }
    if (data.createStartDate && !data.createEndDate) {
      ctx.throw(422, '创建结束时间: 不能为空');
    } else if (!data.createStartDate && data.createEndDate) {
      ctx.throw(422, '创建起始时间: 不能为空');
    } else if (data.createStartDate && data.createEndDate) {
      where.create_at = {
        [Op.lt]: data.createStartDate,
        [Op.gt]: data.createEndDate,
      };
    }
    if (data.updateStartDate && !data.updateEndDate) {
      ctx.throw(422, '更新结束时间: 不能为空');
    } else if (!data.updateStartDate && data.updateEndDate) {
      ctx.throw(422, '更新起始时间: 不能为空');
    } else if (data.updateStartDate && data.updateEndDate) {
      where.update_at = {
        [Op.lt]: data.updateStartDate,
        [Op.gt]: data.updateEndDate,
      };
    }
    query.where = where;
    query.attributes = ['id', ['tag_id', 'tagId'], 'title', 'content', ['is_publish', 'isPublish'], ['is_recommend', 'isRecommend'], ['create_at', 'createAt'], ['update_at', 'updateAt']];
    console.log('qurey: ', query);
    ctx.body = await service.post.index(query);
    ctx.status = 201;
  }

  async create() {
    try {
      const ctx = this.ctx;
      const { title, content = '', tag = null, isPublish = false, isRecommend = false } = ctx.request.body;
      if (!title) {
        ctx.throw(422, '请输入文章标题');
      }
      const dateTime = formatDateTime(Date.now());
      await ctx.service.post.create({
        title, tag_id: tag, content, is_publish: isPublish, is_recommend: isRecommend, create_at: dateTime,
      });
      ctx.status = 201; // 201 created: 表示请求已被实现

    } catch (err) {
      this.ctx.throw(err.status, err.message);
    }
  }

  async update() {
    try {
      const ctx = this.ctx;
      const { id, title, content = '', tag = null, isPublish = false, isRecommend = false } = ctx.request.body;
      const post = await ctx.service.post.getPostById(id);
      if (!post) {
        ctx.throw(422, '文章不存在');
      }
      if (!title) {
        ctx.throw(422, '请输入文章标题');
      }
      const dateTime = formatDateTime(Date.now());

      await ctx.service.post.update({
        title, tag_id: tag, content, is_publish: isPublish, is_recommend: isRecommend, update_at: dateTime,
      });
      ctx.status = 201; // 201 created: 表示请求已被实现

    } catch (err) {
      this.ctx.throw(err.status, err.message);
    }
  }

  async delete() {
    try {
      const ctx = this.ctx;
      const { id } = ctx.request.body;
      const post = await ctx.service.post.getPostById(id);
      if (!post) {
        ctx.throw(422, '文章不存在');
      }
      await ctx.service.post.delete(id);
      ctx.status = 200;
    } catch (err) {
      this.ctx.throw(err.status, err.message);
    }
  }

  // async create() {
  //   const { ctx, service } = this;
  //   const { title, content, tagName } = ctx.request.body;
  // }
}

module.exports = PostController;
