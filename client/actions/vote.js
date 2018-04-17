import request from 'superagent'

import {showError} from './error'
import {getPosts} from './posts'

export function addVote (id) {
  return (dispatch) => {
    request
      .post(`http://localhost:3000/api/v1/vote`)
      .send(id)
      .then(res => {
        dispatch(getPosts())
      })
      .catch(() => {
        dispatch(showError('An unexpected error in getting information'))
      })
  }
}
