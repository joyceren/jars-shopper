const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
      date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      status: {
        type: Sequelize.ENUM('Open', 'Paid', 'Shipped', 'Closed'),
        defaultValue: 'Open'
      }
  }
);

module.exports = Order;
