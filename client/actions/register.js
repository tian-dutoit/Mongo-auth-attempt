import request from 'superagent'

import {showError} from './error'

export function register (userDetails) {
  return (dispatch) => {
    request
      .post(`http://localhost:3000/api/v1/register`)
      .send(userDetails)
      .then(res => {
        localStorage.setItem('user', res.body.token)
        res.send(res)
      })
      .catch(() => {
        dispatch(showError('An unexpected error in getting information'))
      })
  }
}
