import {getPosts, receivePosts} from '../../../client/actions/posts'

test('receivePosts returns the correct action type', () => {
  const expected = 'RECEIVE_POSTS'

  const actual = receivePosts()

  expect(actual.type).toBe(expected)
})

test('receivePosts returns the correct action', () => {
  const expected = {
    type: 'RECEIVE_POSTS'
  }

  const actual = receivePosts()

  expect(actual).toEqual(expected)
})
