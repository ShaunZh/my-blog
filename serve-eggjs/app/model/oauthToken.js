/*
 * @Description:
 * @Author: Hexon
 * @Date: 2020-05-08 13:47:16
 * @LastEditors: Hexon
 * @LastEditTime: 2020-05-08 13:48:53
 */
'use strict';
module.exports = app => {
  const { INTEGER, STRING, DATE } = app.Sequelize;
  const OauthToken = app.model.define('oauth-token', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    user_id: INTEGER,
    access_token: STRING,
    access_token_expires_at: DATE,
    client_id: STRING,
  });

  return OauthToken;
};
