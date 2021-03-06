/*
 * @Description:
 * @Author: Hexon
 * @Date: 2020-05-07 16:55:14
 * @LastEditors: Hexon
 * @LastEditTime: 2020-06-19 16:20:52
 */
'use strict';

const dayjs = require('dayjs');
module.exports = (app) => {
  const { INTEGER, STRING, BOOLEAN, DATE, NOW } = app.Sequelize;
  const Permission = app.model.define('permission', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: STRING, allowNull: false },
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

  return Permission;
};
