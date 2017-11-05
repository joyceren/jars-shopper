import axios from 'axios';

const GET_ONE_ORDER = 'GET_ONE_ORDER'

const getOneOrder = order => ({type: GET_ONE_ORDER, order})

export default function reducer (state={}, action) {
    switch (action.type) {
      case GET_ONE_ORDER:
      return action.order;

      default:
      return state;
    }
}

export function fetchOrder(userId) {
  return function thunk(dispatch) {
      return axios.get(`/api/orders/open/user/${userId}`)
          .then(res => res.data)
          .then(order => {
              const action = getOneOrder(order);
              dispatch(action)
          })
  }
}
