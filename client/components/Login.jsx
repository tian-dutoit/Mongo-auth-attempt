import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {login} from '../actions/login'

class Login extends React.Component {
  constructor () {
    super()
    this.state = {
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (e) {
    e.preventDefault()
    this.props.dispatch(login(this.state))
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render () {
    return (
      <div className='loginContainer'>
        {this.props.loggedIn && <Link to='/' ><button>Login Successful</button></Link>}
        {!this.props.loggedIn &&
          <form onSubmit={this.handleSubmit}>
            <input name='username' placeholder= 'User name *' onChange={this.handleChange} required/>
            <br />
            <input type='password' name='password' placeholder= 'Password *' onChange={this.handleChange} />
            <br />
            <button type='submit' className='loginButton'>Login</button>
            <br />
          </form>}

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    loggedIn: state.login.loggedIn
  }
}

export default connect(mapStateToProps)(Login)
