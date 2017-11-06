const router = require('express').Router();
const { Order } = require('../db/models');
module.exports = router;

function cartMaker(req, res, next) {
  console.log('in cartMaker')
  if (req.user.id) {
    console.log('USER ID ', req.user.id)
    Order.findOne({
      where: { userId: req.user.id, status: 'Open' },
    })
    .then(order => {
      req.session.cartId = order.id
      next();
    })
    .catch(next);
  }
  const cartId = req.session.cartId;
  if (!cartId) {
    Order.create()
    .then(cart => {
      console.log('made cart')
      req.session.cartId = cart.id;
      next();
    })
    .catch(next);
  }
  next();
}

router.use(cartMaker);
router.use('/cart', require('./cart'));
router.use('/users', require('./users'));
router.use('/products', require('./products'));
router.use('/orders', require('./orders'));
router.use('/categories', require('./categories'));

router.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal Error');
})
