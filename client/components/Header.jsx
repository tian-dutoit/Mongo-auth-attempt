import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className='headerContainer'>
      <Link to='/' className='headerLink'> <span >Home</span> </Link>
      <Link to='/submit' className='headerLink'> <span>Submit Talk</span> </Link>
    </div>
  )
}

export default Header
