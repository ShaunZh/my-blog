/*
 * @Description:
 * @Author: Hexon
 * @Date: 2020-05-07 16:28:49
 * @LastEditors: Hexon
 * @LastEditTime: 2020-06-19 16:21:29
 */
'use strict';

const dayjs = require('dayjs');
module.exports = (app) => {
  const { INTEGER, STRING, DATE, BOOLEAN, NOW } = app.Sequelize;
  const User = app.model.define('user', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING(30), // 用户名
    username: { type: STRING(30), allowNull: false }, // 登录账号
    passhash: { type: STRING, allowNull: false }, // 登录密码
    age: INTEGER,
    email: STRING,
    avatar: STRING,
    job: STRING,
    status: BOOLEAN,
    create_at: {
      type: DATE,
      allowNull: false,
      defaultValue: NOW,
      get() {
        const rawValue = this.getDataValue('create_at');
        return dayjs(rawValue).format('YYYY-MM-DD HH:mm:ss');
      },
    },
    update_at: {
      type: DATE,
      allowNull: false,
      defaultValue: NOW,
      get() {
        const rawValue = this.getDataValue('update_at');
        return dayjs(rawValue).format('YYYY-MM-DD HH:mm:ss');
      },
    },
  });
  return User;
};
