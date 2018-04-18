import React from 'react'
import {connect} from 'react-redux'

import {register} from '../actions/register'

class Register extends React.Component {
  constructor () {
    super()
    this.state = {
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (e) {
    e.preventDefault()
    this.props.dispatch(register(this.state))
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
          <input name='password' placeholder= 'Password *' onChange={this.handleChange} />
          <br />
          <input name='confirmPassword' placeholder= 'Confirm Password *' onChange={this.handleChange} />
          <br />
          <button type='submit' className='loginButton'>Register</button>
          <br />
        </form>
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
