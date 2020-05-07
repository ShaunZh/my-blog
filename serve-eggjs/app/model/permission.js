/*
 * @Description:
 * @Author: Hexon
 * @Date: 2020-05-07 16:55:14
 * @LastEditors: Hexon
 * @LastEditTime: 2020-05-07 16:56:16
 */
'use strict';

module.exports = app => {
  const { INTEGER, STRING, BOOLEAN } = app.Sequelize;
  const Permission = app.model.define('permission', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING,
    status: BOOLEAN,
  });

  return Permission;
};
