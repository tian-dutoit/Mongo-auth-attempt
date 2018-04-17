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
      <div className='submitContainer'>
        <form>
          <input name='title' placeholder= 'Title *' onChange={this.handleChange} required/>
          <br />
          <input name='username' placeholder= 'User name *' onChange={this.handleChange} required/>
          <br />
          <input name='link' placeholder= 'Link (optional)' onChange={this.handleChange} />
          <br />
          <textarea name='description' placeholder= 'Description *' onChange={this.handleChange} required/>
          <br />
          <button type='submit' onClick={this.handleClick}>Submit lightning talk</button>
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

export default connect(mapStateToProps)(Submit)
