import request from 'superagent'

import {showError} from './error'

export const SUBMITTED = 'SUBMITTED'

export function submitted () {
  return {
    type: SUBMITTED,
    submitted: true
  }
}

export function clearSubmit () {
  return {
    type: SUBMITTED,
    submitted: false
  }
}

export function sendTalk (talkDetails) {
  return (dispatch) => {
    request
      .post(`http://localhost:3000/api/v1/posts`)
      .send(talkDetails)
      .then(
        dispatch(submitted())
      )
      .catch(() => {
        dispatch(showError('An unexpected error in getting information'))
      })
  }
}
