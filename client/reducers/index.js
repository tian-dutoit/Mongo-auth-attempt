import {combineReducers} from 'redux'

import login from './login'
import posts from './posts'
import submitted from './submitted'

export default combineReducers({
  login,
  posts,
  submitted
})
