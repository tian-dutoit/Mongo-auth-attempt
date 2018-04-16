import request from 'superagent'

import {showError} from './error'

export const RECEIVE_POSTS = 'RECEIVE_POSTS'

export const receivePosts = (posts) => {
  return {
    type: RECEIVE_POSTS,
    posts
  }
}

export function getPosts () {
  return (dispatch) => {
    request('get', `http://localhost:3000/api/v1/posts`)
      .then(res => {
        dispatch(receivePosts(res.body))
      })
      .catch(() => {
        dispatch(showError('An unexpected error in getting information'))
      })
  }
}