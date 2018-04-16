import React from 'react'
import {connect} from 'react-redux'

import {sendTalk} from '../actions/submit'

class Submit extends React.Component {
  constructor () {
    super()
    this.state = {
      test: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.props.dispatch(sendTalk(this.state))
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render () {
    return (
      <div className='submit-container'>
        <p>Submit is here</p>
        <input name='title' placeholder= 'title' onChange={this.handleChange} />
        <br />
        <input name='description' placeholder= 'description' onChange={this.handleChange} />
        <br />
        <input name='username' placeholder= 'username' onChange={this.handleChange} />
        <br />
        <button type='submit' onClick={this.handleClick}>Submit lightning talk</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Submit)
