import React from 'react'
import {Route} from 'react-router-dom'

import Footer from './Footer'
import Header from './Header'
import List from './List'
import Login from './Login'
import Submit from './Submit'
import Register from './Register'

const App = () => (
  <div className='appContainer'>
    <Header />
    <Route exact path = '/' component={List} />
    <Route exact path = '/submit' component={Submit} />
    <Route exact path = '/login' component={Login} />
    <Route exact path = '/Register' component={Register} />
    <Footer />
  </div>
)

export default App
