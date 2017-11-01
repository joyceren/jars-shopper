import axios from 'axios';

/* ACTION TYPES */

const GET_PRODUCTS = 'GET_PRODUCTS';

/* ACTION CREATORS */

const getAll = products => ({ type: GET_PRODUCTS, products})

/* REDUCERS */

export default function reducer (state=[], action) {
    switch (action.type) {
        case GET_PRODUCTS:
        return  action.products;

        default:
        return state;
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
