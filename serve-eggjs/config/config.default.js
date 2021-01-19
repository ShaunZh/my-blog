/* eslint valid-jsdoc: "off" */

'use strict';

const databaseConfig = require('../database/config.json');

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1588750882373_1229';
  config.authCookieName = 'node_club';

  // add your middleware config here
  config.middleware = ['errorHandler', 'formatResponse'];
  // config.errorHandler = {
  // };
  config.jwt = {
    secret: '123456', // 自己设置的值
    algorithm: 'HS256',
    expiresIn: 60 * 60 * 24 * 7, // 7天过期
  };
  config.security = {
    csrf: {
      enable: false,
    },
    domainWhiteList: ['http://127.0.0.1:4000', 'http://192.168.101.84:8000/'],
  };
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
    credentials: true,
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    // onerror: (err, ctx) => {
    //   console.log('err: ', err);
    //   console.log('ctx: ', ctx);
    // },
  };
  config.sequelize = {
    ...databaseConfig.development,
    define: {
      freezeTableName: true,
      // timestamps: true,
      createdAt: 'create_at',
      updatedAt: 'update_at',
    },
  };
  // config.mysql = {
  //   client: {
  //     // host
  //     host: databaseConfig.host,
  //     // 端口号
  //     port: databaseConfig.port,
  //     // 用户名
  //     user: databaseConfig.username,
  //     // 密码
  //     password: databaseConfig.password,
  //     // 数据库名
  //     database: databaseConfig.database,
  //   },
  // };
  config.security = {
    csrf: {
      // 判断是否需要 ignore 的方法，请求上下文 context 作为第一个参数
      enable: false,
    },
  };
  config.i18n = {
    defaultLocale: 'zh-CN',
  };
  // config.onerror = {
  //   all(err, ctx) {
  //     console.log('err: ', err);
  //     console.log('ctx: ', ctx);
  //   },
  // };

  return {
    ...config,
    ...userConfig,
  };
};
