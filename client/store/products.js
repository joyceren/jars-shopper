import axios from 'axios';

/* ACTION TYPES */

const GET_PRODUCTS = 'GET_PRODUCTS';
const GET_ONE_PRODUCT = 'GET_ONE_PRODUCT'

/* ACTION CREATORS */

const getAll = products => ({ type: GET_PRODUCTS, products})
const getOneProduct = product => ({type: GET_PRODUCT, product})

/* REDUCERS */

export default function reducer (state=[], action) {
    switch (action.type) {
        case GET_ONE_PRODUCT:
        return action.products;
  
        case GET_PRODUCTS :
        return  action.products;
    }
}

/* THUNK */

export function fetchProducts () {
  return function thunk (dispatch) {
    return axios.get('/api/products')
      .then(res => res.data)
      .then(products => {
        const action = getAll(products);
        dispatch(action);
      });
};
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

