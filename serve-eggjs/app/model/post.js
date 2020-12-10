'use strict';

const dayjs = require('dayjs');

module.exports = (app) => {
  const { STRING, INTEGER, DATE, NOW, BOOLEAN } = app.Sequelize;

  // Define a new model, representing a table in the database.
  const Tag = app.model.define('post', {
    tag_id: INTEGER,
    title: STRING,
    content: STRING,
    is_publish: BOOLEAN,
    is_recommend: BOOLEAN,

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

  return Tag;
};
