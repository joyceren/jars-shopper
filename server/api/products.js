const express = require('express')
const { Review, Product, Category } = require('../db/models');

const router = new express.Router();

router.get('/', function(req, res, next){
	Product.findAll({
		include: [ Review, Category ]
	})
		.then(products => res.json(products))
		.catch(next)
})

router.get('/:id', function(req, res, next){
	Product.findById(req.params.id, {
		include: [ Review, Category ]
	})
		.then(product => {
			if (!product) res.sendStatus(404)
			else res.json(product)
		})
		.catch(next)
})

router.post('/', (req, res, next) => {
	Product.create(req.body)
		.then((product) => res.json(product))
		.catch(next)
})

router.put('/:id', (req, res, next) => {
	Product.findById(req.params.id)
		.then((product) => product.update(req.body))
		.then((product) => res.json(product))
		.catch(next);
})

router.delete('/:id', (req, res, next) => {
    Product.destroy({
      where: {id: req.params.id},
    })
    	.then(() => res.sendStatus(204))
      .catch(next);
})

module.exports = router;