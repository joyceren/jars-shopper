const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
      date: {
        type: Sequelize.DATE,
      },
      status: {
        type: Sequelize.ENUM('Open', 'Processing', 'Canceled', 'Completed'),
        defaultValue: 'Open'
      }
  }
);



module.exports = Order;
