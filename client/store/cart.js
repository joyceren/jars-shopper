import axios from 'axios';

const SET_CART = 'GET_CART'

const setCart = order => ({type: SET_CART, order})

export default function reducer (state={}, action) {
    switch (action.type) {
      case SET_CART:
      return action.order;

      default:
      return state;
    }
}

export function fetchCart(userId) {
  return function thunk(dispatch) {
    if(!userId) dispatch({type: SET_CART, order: {}})
    else{
      return axios.get(`/api/orders/cart/${userId}`)
        .then(res => res.data)
        .then(order => {
            const action = setCart(order);
            dispatch(action)
        })
    }

  }
}
