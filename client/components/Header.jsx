import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {logout} from '../actions/logout'

class Header extends React.Component {
  constructor () {
    super()
    this.state = {
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    localStorage.removeItem('token')
    this.props.dispatch(logout())
  }

  render () {
    console.log(this.props.loggedIn)
    return (
      <div className='headerContainer'>
        <Link to='/' className='headerLink'> <span >Home</span> </Link>
        {this.props.loggedIn && <Link to='/submit' className='headerLink'> <span>Submit Talk</span> </Link>}
        {!this.props.loggedIn && <Link to='/register' className='headerLink'> <span>Register</span> </Link>}
        {!this.props.loggedIn && <Link to='/login' className='headerLink'> <span>Login</span> </Link>}
        {this.props.loggedIn && <Link to='/' className='headerLink' onClick={this.handleClick}> <span>Logout</span> </Link>}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.login
  }
}

export default connect(mapStateToProps)(Header)
