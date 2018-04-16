import {RECEIVE_POSTS} from '../actions/test'

const posts = (state = [{_id: 'id1', title: 'There are currently no lightning talks', description: 'Please submit your own', username: 'Lightning Talks Team'}], action) => {
  switch (action.type) {
    case RECEIVE_POSTS:
      return action
    default:
      return state
  }
}

export default posts
