const router = require('express').Router()
const { Category } = require('../db/models');

module.exports = router

router.get('/', (req, res, next) => {
  Category.findAll()
    .then(category => res.json(category))
    .catch(next)
})

router.post('/', (req, res, next) => {
  Category.findOrCreate(
    where: req.body,
    defaults: req.body,
  )
    .then(category => res.json(category))
    .catch(next)
})

router.delete('/:name', (req, res, next) => {
  Category.destroy(
    where: {
      name: req.params.name
    }
  )
    .then(() => res.sendStatus(204))
    .catch(next);
})

router.put('/:name', (req, res, next) => {
  Category.update(req.body, {
    where: {
      name: req.params.name
    },
    returning: true
  })
    .then(updatedCategory => res.json(updatedCategory))
    .catch(next)
})
