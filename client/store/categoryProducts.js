import axios from 'axios';

/* ACTION TYPES */

const GET_FILTERED_CATEGORIES = 'GET_FILTERED_CATEGORIES';

/* ACTION CREATORS */

const getFilteredCategories = categories => ({ type: GET_FILTERED_CATEGORIES, categories})

/* REDUCERS */

export default function reducer (state=[], action) {
    switch (action.type) {
        case GET_FILTERED_CATEGORIES:
        return  action.categories.products;
        default:
        return state;
    }
}

/* THUNK */

export function fetchCategoryProducts (name) {
  return function thunk (dispatch) {
    return axios.get(`/api/categories/${name}`)
      .then(res => res.data)
      .then(categories => {
        const action = getFilteredCategories(categories);
        dispatch(action);
      });
};
}
