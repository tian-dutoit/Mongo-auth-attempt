import React from 'react'
import {Route} from 'react-router-dom'

import Footer from './Footer'
import Header from './Header'
import List from './List'
import Submit from './Submit'

const App = () => (
  <div className='appContainer'>
    <Header />
    <p>App is connected</p>
    <Route exact path = '/' component={List} />
    <Route exact path = '/submit' component={Submit} />
    <Footer />
  </div>
)

export default App
