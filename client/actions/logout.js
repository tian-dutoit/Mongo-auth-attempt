import {LOGIN} from './login'

export const logout = () => {
  return {
    type: LOGIN,
    loggedIn: false
  }
}
