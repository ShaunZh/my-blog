/*
 * @Description:
 * @Author: Hexon
 * @Date: 2020-05-07 16:28:49
 * @LastEditors: Hexon
 * @LastEditTime: 2020-05-07 17:39:23
 */
'use strict';

module.exports = app => {
  const { INTEGER, STRING, DATE, BOOLEAN } = app.Sequelize;
  const User = app.model.define('user', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING(30), // 用户名
    account: STRING(30), // 登录账号
    password: STRING(30), // 登录密码
    age: INTEGER,
    email: STRING,
    avatar: STRING,
    job: STRING,
    status: BOOLEAN,
    created_at: DATE,
    updated_at: DATE,
  });
  return User;
};
