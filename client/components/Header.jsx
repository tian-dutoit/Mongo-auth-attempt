import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className='headerContainer'>
      <Link to='/'> <span>Home</span> </Link>
      <Link to='/submit'> <span>Submit</span> </Link>
    </div>
  )
}

export default Header
