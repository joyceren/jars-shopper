import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import user from './user'
import products from './products'
import product from './selectedProduct'
import selectedUser from './selectedUser'
import categories from './categories'
import cart from './cart'
import categoryProducts from './categoryProducts'
import userOrders from './userOrders'
import selectedOrder from './selectedOrder'

const reducer = combineReducers({
  user,
  products,
  product,
  selectedUser,
  categories,
  cart,
  categoryProducts,
  userOrders,
  selectedOrder
})

const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({collapsed: true})
))

const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './products'
export * from './selectedProduct'
export * from './categories'
export * from './cart'
export * from './categoryProducts'
export * from './userOrders'
export * from './selectedOrder'
