import axios from 'axios';

const GET_ONE_PRODUCT = 'GET_ONE_PRODUCT'

const getOneProduct = product => ({type: GET_ONE_PRODUCT, product})

export default function reducer (state={}, action) {
    switch (action.type) {
      case GET_ONE_PRODUCT:
      return action.product;

      default:
      return state;
    }
}

export function fetchProduct(id) {
  return function thunk(dispatch) {
      return axios.get(`/api/products/${id}`)
          .then(res => res.data)
          .then(product => {
              const action = getOneProduct(product);
              dispatch(action)
          })
  }
}
