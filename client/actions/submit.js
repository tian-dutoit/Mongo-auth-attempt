import request from 'superagent'

import {showError} from './error'

export function sendTalk (talkDetails) {
  return (dispatch) => {
    request
      .post(`http://localhost:3000/api/v1/posts`)
      .send(talkDetails)
      .then(res => {
        res.send(res)
      })
      .catch(() => {
        dispatch(showError('An unexpected error in getting information'))
      })
  }
}
