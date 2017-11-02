import axios from 'axios';

const GET_ONE_USER = 'GET_ONE_USER'

const getOneUser = user => ({type: GET_ONE_USER, user})

export default function reducer (state={}, action) {
    switch (action.type) {
      case GET_ONE_USER:
      return action.user;

      default:
      return state;
    }
}

export function fetchUser(id) {
  return function thunk(dispatch) {
      return axios.get(`/api/users/${id}`)
          .then(res => res.data)
          .then(product => {
              const action = getOneProduct(product);
              dispatch(action)
          })
  }
}
