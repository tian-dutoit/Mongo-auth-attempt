import {LOGIN} from '../actions/login'

const login = (state = {loggedIn: false}, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        loggedIn: action.loggedIn
      }
    default:
      return state
  }
}

export default login
