import axios from 'axios';

/* ACTION TYPES */

const GET_CATEGORIES = 'GET_CATEGORIES';

/* ACTION CREATORS */

const getCategories = categories => ({ type: GET_CATEGORIES, categories})

/* REDUCERS */

export default function reducer (state=[], action) {
    switch (action.type) {
        case GET_CATEGORIES:
        return  action.categories;
        default:
        return state;
    }
}

/* THUNK */

export function fetchCategories () {
  return function thunk (dispatch) {
    return axios.get('/api/categories')
      .then(res => res.data)
      .then(categories => {
        const action = getCategories(categories);
        dispatch(action);
      });
};
}
