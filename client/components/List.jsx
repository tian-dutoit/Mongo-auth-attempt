import React from 'react'
import {connect} from 'react-redux'

import {getPosts} from '../actions/posts'
import {addVote} from '../actions/vote'
import {loggedIn} from '../actions/login'

import Placeholder from './Placeholder'

export class List extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount () {
    const active = localStorage.getItem('token')
    if (active) {
      this.props.dispatch(loggedIn())
    }
    this.props.dispatch(getPosts())
  }

  handleClick (e) {
    let _id = [e.target.name]
    this.props.dispatch(addVote(_id))
  }

  render () {
    return (
      <div className='listContainer'>
        {this.props.posts.length < 1 && <Placeholder />}
        {this.props.posts.map((post, idx) => (
          <div className='post' key={post._id}>
            <div className='button'>
              <p id={`${post._id}-votes`}>Votes: {post.votes}</p>
              <button name={post._id} onClick={this.handleClick}>Upvote</button>
            </div>
            <div className='content'>
              <p className='title'>{post.title}</p>
              <p className='description'>{post.description}</p>
              <p className='userName'>{post.username}</p>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts
  }
}

export default connect(mapStateToProps)(List)
