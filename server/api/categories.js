const router = require('express').Router()
const { Category, Product } = require('../db/models');

module.exports = router

router.get('/', (req, res, next) => {
  Category.findAll(
    {include: [ Product ]}
  )
    .then(category => res.json(category))
    .catch(next)
})

router.get('/:name', (req, res, next) => {
  Category.findOne({
    where: {
      name: req.params.name
    },
    include: [ Product ]
  })
    .then(category => res.json(category))
    .catch(next)
})

router.post('/', (req, res, next) => {
  Category.findOrCreate({
    where: req.body,
    defaults: req.body,
  })

    .then(category => res.json(category))
    .catch(next)
})

router.delete('/:name', (req, res, next) => {
  Category.destroy({
    where: {
      name: req.params.name
    }
  })
    .then(() => res.sendStatus(204))
    .catch(next);
})

router.put('/:name', (req, res, next) => {
  Category.findById(req.params.id)
    .then(category => category.update(req.body))
    .then(updatedCategory => res.json(updatedCategory))
    .catch(next)
})
