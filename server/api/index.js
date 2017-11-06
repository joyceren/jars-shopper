const router = require('express').Router();
const { Order } = require('../db/models');
module.exports = router;

function cartMaker(req, res, next) {
  const cartId = req.session.cartId;
  if (!cartId) {
    Order.create()
    .then(cart => {
      req.session.cartId = cart.id
      next();
    })
    .catch(next)
  }
}

router.use(cartMaker)
router.use('/cart', require('./cart'));
router.use('/users', require('./users'));
router.use('/products', require('./products'));
router.use('/orders', require('./orders'));
router.use('/categories', require('./categories'));

router.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal Error');
})
