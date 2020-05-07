/*
 * @Description:
 * @Author: Hexon
 * @Date: 2020-05-07 16:56:32
 * @LastEditors: Hexon
 * @LastEditTime: 2020-05-07 16:57:08
 */
'use strict';

module.exports = app => {
  const { INTEGER } = app.Sequelize;
  const RolePermission = app.model.define('role-permission', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    role_id: INTEGER,
    permission_id: INTEGER,
  });

  return RolePermission;
};
