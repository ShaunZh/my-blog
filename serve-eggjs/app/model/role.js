/*
 * @Description:
 * @Author: Hexon
 * @Date: 2020-05-07 16:32:05
 * @LastEditors: Hexon
 * @LastEditTime: 2020-05-07 16:36:22
 */
'use strict';
module.exports = app => {
  const { INTEGER, STRING, BOOLEAN, DATE } = app.Sequelize;
  const Role = app.model.define('role', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING,
    status: BOOLEAN,
    create_at: DATE,
    update_at: DATE,
  });
  return Role;
};
