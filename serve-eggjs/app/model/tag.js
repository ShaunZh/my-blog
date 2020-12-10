/*
 * @Description:
 * @Author: Hexon
 * @Date: 2020-05-06 16:14:58
 * @LastEditors: Hexon
 * @LastEditTime: 2020-08-09 17:19:23
 */
'use strict';
const dayjs = require('dayjs');
module.exports = (app) => {
  const { STRING, INTEGER, DATE, NOW } = app.Sequelize;

  // Define a new model, representing a table in the database.
  const Tag = app.model.define('tag', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: STRING(60), allowNull: false },
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

  return Tag;
};
