import request from 'superagent'

import {showError} from './error'

export const LOGIN = 'LOGIN'

export const loggedIn = () => {
  return {
    type: LOGIN,
    loggedIn: true
  }
}

export function register (userDetails) {
  return (dispatch) => {
    request
      .post(`http://localhost:3000/api/v1/register`)
      .send(userDetails)
      .then(res => {
        localStorage.setItem('token', res.body.token)
        dispatch(loggedIn())
      })
      .catch(() => {
        dispatch(showError('An unexpected error in getting information'))
      })
  }
}
