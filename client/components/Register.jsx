import React from 'react'
import {connect} from 'react-redux'

import {register} from '../actions/register'

class Register extends React.Component {
  constructor () {
    super()
    this.state = {
      password: '',
      confirmPassword: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (e) {
    e.preventDefault()
    if (this.state.password === this.state.confirmPassword) {
      this.props.dispatch(register(this.state))
    }
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render () {
    return (
      <div className='registerContainer'>
        <form onSubmit={this.handleSubmit}>
          <input name='username' placeholder= 'User name *' onChange={this.handleChange} required/>
          <br />
          <input type='password' name='password' placeholder= 'Password *' onChange={this.handleChange} />
          <br />
          <input type='password' name='confirmPassword' placeholder= 'Confirm Password *' onChange={this.handleChange} />
          <br />
          <button type='submit' className='loginButton'>Register</button>
          <br />
        </form>
        <div className = 'message'>
          <p>{this.state.message}</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Register)
