import {RECEIVE_POSTS} from '../../../client/actions/posts'
import posts from '../../../client/reducers/posts'

test('posts receives the posts', () => {
  const beforeState = [{
    posts: [{_id: 'id1', title: 'There', description: 'Please', username: 'Lightning', votes: 0}]
  }]

  const action = {
    type: RECEIVE_POSTS,
    posts: [{_id: 'id2', title: 'After', description: 'State', username: 'Else', votes: 1}]

  }
  const afterState = [{_id: 'id2', title: 'After', description: 'State', username: 'Else', votes: 1}]

  const actualAfterActionState = posts(beforeState, action)

  expect(actualAfterActionState).toEqual(afterState)
})
