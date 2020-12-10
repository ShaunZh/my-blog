'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('user', { id: Sequelize.INTEGER });
    */
    const { STRING, INTEGER, DATE } = Sequelize;
    await queryInterface.createTable('tag', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      name: STRING(60),
      create_at: DATE,
      update_at: DATE,
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('tag');
  },
};
