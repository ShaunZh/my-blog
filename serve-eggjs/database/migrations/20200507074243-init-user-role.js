'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER } = Sequelize;
    await queryInterface.createTable('user-role', {
      id: INTEGER,
      user_id: INTEGER,
      role_id: INTEGER,
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('user-role');
  },
};
