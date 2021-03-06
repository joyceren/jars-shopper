/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export {default as Main} from './main'
export {default as UserHome} from './user-home'
export {Login, Signup} from './auth-form'
export {default as AllProducts} from './AllProducts'
export {default as SingleProduct} from './SingleProduct'
export {default as Home} from './Home'
export {default as Category} from './Category'
export {default as Cart} from './Cart'
export {default as Order} from './Order'
export {default as Checkout} from './Checkout'
export {default as ReviewOrder} from './ReviewOrder'
export {default as Footer} from './Footer'
