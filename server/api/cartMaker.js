const { Order } = require('../db/models');

module.exports = function cartMaker(req, res, next) {
  if(req.user){
    console.log('User ID=',req.user.id)
    Order.findOne({
      where: {userId: Number(req.user.id), status: "Open"}
    })
    .then(order => {
      req.session.cartId = order.id
      next()
    })
    .catch(next)
  }
  else if(!req.session.cartId){
    console.log("No User, No Cart, making cart...")
    Order.create()
    .then(order => {
      req.session.cartId = order.id
      console.log("just made this cart=", req.session.cartId)
      next()
    })
    .catch(next)
  }
  else{
    next()
  }

}
