'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER } = Sequelize;
    await queryInterface.createTable('role-permission', {
      id: INTEGER,
      role_id: INTEGER,
      permission_id: INTEGER,
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('role-permission');
  },
};
