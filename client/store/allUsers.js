import axios from 'axios'

const GET_USERS = 'GET_USERS'

const getUsers = users => ({type: GET_USERS, users})


export default function (state = [], action) {
  switch (action.type) {
    case GET_USERS:
      return action.users
    default:
      return state
  }
}

export function fetchAllUsers () {
  return function thunk (dispatch) {
      return axios.get(`/api/users/all`)
        .then(res => res.data)
        .then(users => {
          dispatch(getUsers(users))
        })
  }
}
