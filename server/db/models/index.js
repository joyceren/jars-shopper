const User = require('./user')
const Product = require('./product')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */

 Product.hasMany(Reviews);
 Product.belongsToMany(Categories);

module.exports = {
  User,
<<<<<<< HEAD
  Product
=======
  Category
>>>>>>> 23e0032650fa154f15e21a4daa1321b6aa4ecb1c
}

Order.belongsTo(User);
