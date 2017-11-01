const router = require('express').Router()
const { Order } = require('../db/models');

module.exports = router

//When do you make a order? For unauth users/auth users?

router.get('/', (req, res, next) => {
  Order.findAll()
  .then(orders => res.json(orders))
  .catch(next)
})

router.get('/:id', (req, res, next) => {
  Order.findOne( {
    where: {
      id: req.params.id
    }
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


//make sure to update quantities => use associations
router.put('/:id', (req, res, next) => {
  Order.update(req.body, {
    where: {
      id: req.params.id
    },
    returning: true,
  })
  .then(order => res.json(order))
  .catch(next)
})
