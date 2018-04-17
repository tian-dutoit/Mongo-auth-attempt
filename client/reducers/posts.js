import {RECEIVE_POSTS} from '../actions/posts'

const posts = (state = {posts: [{_id: 'id1', title: 'There are currently no lightning talks', description: 'Please submit your own', username: 'Lightning Talks Team', votes: 0}]}, action) => {
  switch (action.type) {
    case RECEIVE_POSTS:
      return action
    default:
      return state
  }
}

export default posts
