'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING, BOOLEAN } = Sequelize;
    await queryInterface.createTable('permission', {
      id: INTEGER,
      name: STRING,
      status: BOOLEAN,
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('permission');
  },
};
