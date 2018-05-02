import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {clearSubmit, sendTalk} from '../actions/submit'

class Submit extends React.Component {
  constructor () {
    super()
    this.state = {
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.reset = this.reset.bind(this)
  }

  componentDidMount () {
    this.props.dispatch(clearSubmit())
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit (e) {
    e.preventDefault()
    this.props.dispatch(sendTalk(this.state))
  }

  reset () {
    this.props.dispatch(clearSubmit())
  }

  render () {
    return (
      <div className='submitContainer'>
        {this.props.submitted &&
        <div>
          <button onClick={this.reset}>Another Post</button>
          <Link to='/' ><button>Return Home</button></Link></div>}
        {!this.props.submitted &&
        <form onSubmit={this.handleSubmit}>
          <input name='title' placeholder= 'Title *' onChange={this.handleChange} required/>
          <br />
          <input name='username' placeholder= 'User name *' onChange={this.handleChange} required/>
          <br />
          <input name='link' placeholder= 'Link (optional)' onChange={this.handleChange} />
          <br />
          <textarea name='description' placeholder= 'Description *' onChange={this.handleChange} required/>
          <br />
          <button type='submit'>Submit lightning talk</button>
          <br />
        </form>}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    submitted: state.submitted.submitted
  }
}

export default connect(mapStateToProps)(Submit)
