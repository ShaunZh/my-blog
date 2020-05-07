'use strict';

module.exports = {
  // 在执行数据库升级时调用的函数，创建 users 表
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING, BOOLEAN, DATE } = Sequelize;
    await queryInterface.createTable('user', {
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
  },
  // 在执行数据库降级时调用的函数，删除 users 表
  down: async queryInterface => {
    await queryInterface.dropTable('user');
  },
};
