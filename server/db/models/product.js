const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const images = [
  'https://previews.123rf.com/images/nataka/nataka1304/nataka130400010/19088142-cute-dragon-vector-Stock-Vector-baby.jpg',  'https://cdn.theatlantic.com/assets/media/img/mt/2015/10/triple/lead_960.jpg?1444863760',
  'https://i.pinimg.com/originals/0b/6a/da/0b6ada591e92c860d88fd0925cb4a2e8.jpg',
  'https://thumbs.dreamstime.com/z/vector-cute-smiling-happy-dragon-as-cartoon-toy-22305702.jpg'
];

const getRandomImage = () => images[Math.floor(Math.random() * images.length)];


const Product = db.define('product', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  image: {
    type: Sequelize.STRING,
    defaultValue: function() {
      return getRandomImage();
    },
    allowNull: false
  }
})

module.exports = Product;

