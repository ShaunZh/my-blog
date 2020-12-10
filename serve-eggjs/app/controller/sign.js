/*
 * @Description:
 * @Author: Hexon
 * @Date: 2020-05-08 15:26:08
 * @LastEditors: Hexon
 * @LastEditTime: 2020-08-10 10:47:48
 */
'use strict';

const validator = require('validator');
const Controller = require('egg').Controller;

// const registerRule = {
//   account: 'string',
//   password: 'string',
//   confirm: 'string',
// };

class UserController extends Controller {
  // async login() {
  //   try {
  //     const ctx = this.ctx;
  //     // 校验参数
  //     ctx.validate(loginRule, ctx.request.body);
  //     const { account, password } = ctx.request.body;
  //     // 1. 判断username是否存在
  //     const { success, accessToken } = await ctx.service.user.login({
  //       account,
  //       password,
  //     });
  //     // 2. 判断密码是否正确
  //     if (success) {
  //       ctx.body = {
  //         Authorization: accessToken,
  //       };
  //     }
  //   } catch (err) {
  //     this.ctx.throw(err.status, err.message);
  //   }
  // }
  async signin() {
    const { ctx, service } = this;
    const { username, password } = ctx.request.body;
    const getUser = (username) => {
      if (username.indexOf('@') > -1) {
        return ctx.service.user.getUserByEmail(username);
      }
      return ctx.service.user.getUserByLoginName(username);
    };
    // const setCookies = token => {
    //   const opt = {
    //     maxAge: 1000 * 60 * 60 * 24 * 30, // 30天
    //     httponly: false,
    //     signed: false,
    //   };
    //   // 设置cookie
    //   ctx.cookies.set(app.config.authCookieName, token, opt);
    // };
    // ctx.cookies.set('cookies: ', 'aasdfasdfasdf');
    // ctx.validate(loginRule, ctx.request.body);
    // 1. 根据email 和 username 获取用户
    const existUser = await getUser(username);
    if (!existUser) {
      ctx.throw(422, '用户名或邮箱不存在');
    }
    if (!password) {
      ctx.throw(422, '请输入密码');
    }
    // 2. 比较密码
    const passhash = existUser.passhash;
    const equal = ctx.helper.bcompare(password, passhash);
    if (!equal) {
      ctx.throw(422, '密码错误');
    }
    // 3. 如果是需要邮箱激活，则可以加一步邮箱激活验证
    // if (!existUser.active) {
    //   return null
    // }
    // 4. 生成token
    const accessToken = await service.oauth.create({
      userId: existUser.id,
    });
    if (!accessToken) {
      ctx.throw(500, '生成token失败');
    }
    ctx.status = 200;
    ctx.body = {
      accessToken,
    };

    // return existUser;
  }
  async signup() {
    try {
      const { ctx, service } = this;
      // 1. 处理用户提交的数据：如去除首尾空白字符、转换为小写
      const username = validator
        .trim(ctx.request.body.username || '')
        .toLowerCase();
      const email = validator.trim(ctx.request.body.email || '').toLowerCase();
      const password = validator.trim(ctx.request.body.password || '');
      const confirmPassword = validator.trim(
        ctx.request.body.confirmPassword || '',
      );

      let message;
      // 2. 校验用户提交的数据
      if (
        [username, email, password, confirmPassword].some((item) => item === '')
      ) {
        message = '信息不完整';
      } else if (username.length < 5) {
        message = '用户名不能少于5个字符';
      } else if (!ctx.helper.validateId(username)) {
        message = '用户名不合法';
      } else if (!validator.isEmail(email)) {
        message = '邮箱不合法';
      } else if (password !== confirmPassword) {
        message = '两次输入密码不一致';
      }
      if (message) {
        this.ctx.throw(422, message);
      }

      // 3. 查询用户和邮箱是否已存在
      const user = await service.user.getUsersByQuery({
        username,
        email,
      });
      if (user.length) {
        message = '用户名或邮箱已被占用';
        this.ctx.throw(422, message);
      }

      // 4. 将密码hash
      const passwordhash = ctx.helper.bhash(password);

      // 5. 生成用户头像
      const avatarUrl = service.user.makeGravatar(email);

      // 6. 创建用户
      await service.user.create(username, passwordhash, email, avatarUrl);
      ctx.status = 201;
    } catch (err) {
      this.ctx.throw(err.status, err.message);
    }
  }
}

module.exports = UserController;
