'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING, BOOLEAN, DATE } = Sequelize;
    await queryInterface.createTable('role', {
      id: INTEGER,
      name: STRING,
      status: BOOLEAN,
      create_at: DATE,
      update_at: DATE,
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('role');
  },
};
