import React from 'react'
import {mount} from 'enzyme'

import {MemoryRouter as Router} from 'react-router'

import {List} from '../../../client/components/List'

List.prototype.componentDidMount = () => {}

test('<List /> Displays list of posts When route is accessed', () => {
  const posts = [{
    _id: 1,
    posts: 'test post 1'
  }, {
    _id: 2,
    posts: 'test post 2'
  }, {
    _id: 3,
    posts: 'test post 3'
  }]
  const wrapper = mount(
    <Router>
      <List posts={posts}/>
    </Router>)
  expect(wrapper.find('button').length).toBe(3)
})
