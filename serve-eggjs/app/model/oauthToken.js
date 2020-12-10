/*
 * @Description:
 * @Author: Hexon
 * @Date: 2020-05-08 13:47:16
 * @LastEditors: Hexon
 * @LastEditTime: 2020-06-19 16:20:32
 */
'use strict';
const dayjs = require('dayjs');
module.exports = (app) => {
  const { INTEGER, STRING, DATE, NOW } = app.Sequelize;
  const OauthToken = app.model.define('oauth-token', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    user_id: INTEGER,
    access_token: { type: STRING, allowNull: false },
    access_token_expires_at: { type: DATE, allowNull: false },
    client_id: STRING,
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

  // CREATE TABLE `oauth-token` (
  //   `id` int(11) NOT NULL AUTO_INCREMENT,
  //   `user_id` int(11) NOT NULL,
  //   `access_token` varchar(255) NOT NULL,
  //   `access_token_expires_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  //   `client_id` varchar(255) DEFAULT NULL,
  //   `create_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  //   `update_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  //   PRIMARY KEY (`id`)
  // ) ENGINE=InnoDB AUTO_INCREMENT=96 DEFAULT CHARSET=utf8

  return OauthToken;
};
