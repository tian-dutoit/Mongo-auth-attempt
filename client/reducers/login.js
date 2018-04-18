import {LOGIN} from '../actions/login'

const login = (state = false, action) => {
  switch (action.type) {
    case LOGIN:
      return action.loggedIn
    default:
      return state
  }
}

export default login
