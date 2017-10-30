const Sequelize = require('sequelize');
const db = require('../db');

const Review = db.define('review', {
  stars: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      max: 5
    },
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  text: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      len: [0, 100]
    }
  },
})

module.exports = Reviews;
