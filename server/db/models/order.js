const Sequelize = require('sequelize')
const db = require('../db')

//Orders should have a status prop - enum
const Order = db.define('order', {
      date: {
        type: Sequelize.DATE,
        allowNull: false
      }
  }
);

module.exports = Order;
