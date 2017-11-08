import axios from 'axios';
import history from '../history'

const SET_CART = 'GET_CART'

const setCart = cart => ({type: SET_CART, cart})

export default function reducer (state={}, action) {
    switch (action.type) {
      case SET_CART:
      return action.cart;

      default:
      return state;
    }
}

export function fetchCart() {
  return function thunk(dispatch) {
      return axios.get('/api/cart/')
        .then(res => res.data)
        .then(order => {
            const action = setCart(order);
            dispatch(action)
        })
  }
}

export function addToCart(productId, quantity) {
  return function thunk(dispatch) {
    return axios.put('/api/cart', {order: {}, productId, quantity})
      .then(res => res.data)
      .then(order => {
        const action = setCart(order);
        dispatch(action)
        history.push('/cart')
      })
  }
}

export function deleteFromCart(productId) {
  return function thunk(dispatch) {
    return axios.delete(`/api/cart/${productId}`)
    .then(res => res.data)
    .then(order => {
      const action = setCart(order);
      dispatch(action);
    })
  }
}
