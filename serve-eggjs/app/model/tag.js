/*
 * @Description:
 * @Author: Hexon
 * @Date: 2020-05-06 16:14:58
 * @LastEditors: Hexon
 * @LastEditTime: 2020-05-06 17:06:23
 */
'use strict';
module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  // Define a new model, representing a table in the database.
  const Tag = app.model.define('tag', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING(60),
    create_at: DATE,
    update_at: DATE,
  });

  return Tag;
};
