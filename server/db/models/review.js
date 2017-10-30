const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

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

module.exports = Reviews;
