import axios from 'axios';

/* ACTION TYPES */

const GET_FILTERED_CATEGORY = 'GET_FILTERED_CATEGORY';

/* ACTION CREATORS */

const getFilteredCategories = categories => ({ type: GET_FILTERED_CATEGORY, categories})

/* REDUCERS */

export default function reducer (state=[], action) {
    switch (action.type) {
        case GET_FILTERED_CATEGORY:
        return  action.categories;
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
