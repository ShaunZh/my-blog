/*
 * @Description:
 * @Author: Hexon
 * @Date: 2020-05-07 16:56:32
 * @LastEditors: Hexon
 * @LastEditTime: 2020-06-19 15:20:40
 */
'use strict';

const dayjs = require('dayjs');
module.exports = (app) => {
  const { INTEGER, NOW, DATE } = app.Sequelize;
  const RolePermission = app.model.define('role-permission', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    role_id: { type: INTEGER },
    permission_id: INTEGER,
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

  return RolePermission;
};
