const router = require('express').Router()
const { Order, Product } = require('../db/models');

router.put('/', (req, res, next) => {
  Order.findById(req.session.cartId)
  .then(order => {
    console.log(req.body.order)
    order.update(req.body.order)
    return order;
  })
  .then(order => {
    console.log(req.body.productId, req.body.quantity, req.body.currentPrice)
    order.addProduct(req.body.productId, {
    through: {
      quantity: req.body.quantity,
      currentPrice: req.body.currentPrice
    }
  })
  return order;
})
  .then(order => res.json(order))
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

