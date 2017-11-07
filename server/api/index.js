const router = require('express').Router();
module.exports = router;

router.use(require('./cartMaker'))

router.use('/cart', require('./cart'));
router.use('/users', require('./users'));
router.use('/products', require('./products'));
router.use('/orders', require('./orders'));
router.use('/categories', require('./categories'));


router.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal Error');
})
