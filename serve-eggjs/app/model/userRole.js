/*
 * @Description:
 * @Author: Hexon
 * @Date: 2020-05-07 16:53:25
 * @LastEditors: Hexon
 * @LastEditTime: 2020-05-07 16:55:01
 */
'use strict';

module.exports = app => {
  const { INTEGER } = app.Sequelize;
  const UserRole = app.model.define('user-role', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    user_id: INTEGER,
    role_id: INTEGER,
  });

  return UserRole;
};
