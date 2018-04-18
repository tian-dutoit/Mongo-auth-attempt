import request from 'superagent'

import {showError} from './error'

export function login (userDetails) {
  return (dispatch) => {
    request
      .post(`http://localhost:3000/api/v1/login`)
      .send(userDetails)
      .then(res => {
        localStorage.setItem('user', res.body.token)
      })
      .catch(() => {
        dispatch(showError('An unexpected error in getting information'))
      })
  }
}
