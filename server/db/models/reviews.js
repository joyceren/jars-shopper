const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')
const User = require('./user');
const Product = require('./product');

const Review = db.define('review', {
  stars: {
    type: Sequelize.INTEGER,
    validate: {
      notNull: true,
      max: 5,
    },
  },
  title: {
    type: Sequelize.STRING
  },
  text: {
    type: Sequelize.TEXT
  },
})

Review.belongsTo(User);
Review.belongsTo(Product);

module.exports = Reviews;
