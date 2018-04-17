import request from 'superagent'

import {showError} from './error'
import {getPosts} from './posts'

export function register (userDetails) {
  return (dispatch) => {
    request
      .post(`http://localhost:3000/api/v1/register`)
      .send(userDetails)
      .then(res => {
        dispatch(getPosts())
      })
      .catch(() => {
        dispatch(showError('An unexpected error in getting information'))
      })
  }
}
