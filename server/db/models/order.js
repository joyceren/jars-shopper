const Sequelize = require('sequelize')
const db = require('../db')
const User = require('./user');

const Order = db.define('order', {
      date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      products: {
        type: Sequelize.ARRAY(Sequelize.JSON),
        allowNull: false
      },
  }
);

module.exports = Order;


