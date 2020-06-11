'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING, DATE } = Sequelize;
    await queryInterface.createTable('oauth-token', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      user_id: INTEGER,
      access_token: STRING,
      access_token_expires_at: DATE,
      client_id: STRING,
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('oauth-token');

  },
};
