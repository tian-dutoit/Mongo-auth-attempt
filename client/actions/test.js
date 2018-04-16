import request from 'superagent'

import {showError} from './error'

export const RECEIVE_TESTDB = 'RECEIVE_TESTDB'

export const receiveTestdb = (staff) => {
  return {
    type: RECEIVE_TESTDB,
    staff
  }
}

export function getTestdb () {
  return (dispatch) => {
    request('get', `http://localhost:3000/api/v1/test`)
      .then(res => {
        console.log(res.body)
        dispatch(receiveTestdb(res.body))
      })
      .catch(() => {
        dispatch(showError('An unexpected error in getting information'))
      })
  }
}