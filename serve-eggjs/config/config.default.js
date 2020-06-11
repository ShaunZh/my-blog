/* eslint valid-jsdoc: "off" */

'use strict';

const databaseConfig = require('../database/config.json');

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1588750882373_1229';

  // add your middleware config here
  config.middleware = [ 'errorHandler' ];
  // config.errorHandler = {
  // };
  config.jwt = {
    secret: '123456', // 自己设置的值
    algorithm: 'HS256',
  };
  config.security = {
    csrf: {
      enable: false,
    },
    domainWhiteList: [ 'http://localhost:3000', 'http://192.168.101.84:8000/' ],
  };
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
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
    port: 3306,
    define: {
      freezeTableName: true,
      timestamps: false,
    },
  };
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
