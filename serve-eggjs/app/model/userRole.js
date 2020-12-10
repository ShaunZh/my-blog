/*
 * @Description:
 * @Author: Hexon
 * @Date: 2020-05-07 16:53:25
 * @LastEditors: Hexon
 * @LastEditTime: 2020-06-19 16:21:44
 */
'use strict';

const dayjs = require('dayjs');
module.exports = (app) => {
  const { INTEGER, DATE, NOW } = app.Sequelize;
  const UserRole = app.model.define('user-role', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    user_id: INTEGER,
    role_id: INTEGER,
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

  return UserRole;
};
