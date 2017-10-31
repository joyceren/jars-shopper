const router = require('express').Router()
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const express = require('express');


module.exports = router

router.use(morgan('dev')); //logging middleware
router.use(express.static(path.join(__dirname, './public'))); //serving up static files (e.g. css files)
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.use('/users', require('./users'))
router.use('/products', require('./products'));
// router.use('/orders', require('./orders'));

<<<<<<< HEAD
router.use('/users', require('./orders'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
=======
router.use((err, req, res, next) => {
console.error(err.stack);
res.status(err.status || 500).send(err.message || 'Internal Error');
>>>>>>> 6174e333d51b4e3a682c8f9b826b8a964dd19c3e
})
