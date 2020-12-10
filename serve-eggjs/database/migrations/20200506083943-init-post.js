'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { STRING, INTEGER, DATE, BOOLEAN } = Sequelize;
    await queryInterface.createTable('post', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      tag_id: INTEGER,
      title: STRING,
      content: STRING,
      is_publish: BOOLEAN,
      is_recommend: BOOLEAN,
      create_at: DATE,
      update_at: DATE,
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('post');
  },
};
