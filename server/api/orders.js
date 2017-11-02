const router = require('express').Router()
const { Order, Product } = require('../db/models');

module.exports = router



router.get('/', (req, res, next) => {
  Order.findAll({
    include: [ Product ]
  })
  .then(orders => res.json(orders))
  .catch(next)
})

router.get('/:id', (req, res, next) => {
  Order.findOne( {
    where: {
      id: req.params.id
    },
    include: [ Product ]
  })
  .then(order => res.json(order))
  .catch(next)
})

router.post('/', (req, res, next) => {
  Order.create(req.body)
  .then(order => res.json(order))
  .catch(next)
})

router.delete('/:id', (req, res, next) => {
  Order.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(() => res.sendStatus(204))
  .catch(next)
})

router.put('/:id', (req, res, next) => {
  Order.findById(req.params.id)
    .then(order => order.update(req.body.order))
    .then(order => order.setProduct(req.body.product, {
      through: {
        quantity: req.body.quantity,
        currentPrice: req.body.currentPrice
      }
    }))
    .catch(next)
})
