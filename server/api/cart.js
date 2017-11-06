const router = require('express').Router()
const { Order, Product } = require('../db/models');

router.put('/', (req, res, next) => {
  Order.findById(req.session.cartId)
  .then(order => order.update(req.body.order))
  .then(order => order.setProduct(req.body.product, {
    through: {
      quantity: req.body.quantity,
      currentPrice: req.body.currentPrice
    }
  }))
  .catch(next)
});

router.get('/', (req, res, next) => {
  Order.findOne( {
    where: {
      id: req.session.cartId
    },
    include: [ Product ]
  })
  .then(order => res.json(order))
  .catch(next)
})

router.delete('/', (req, res, next) => {
  Order.findById(req.session.cartId)
  .then(order => {
    order.delete()
    req.session.cartId = null;
  })
  .then(() => res.status(204).send())
  .catch(next)
})

module.exports = router;

