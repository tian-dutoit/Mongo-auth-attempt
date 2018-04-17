import React from 'react'
import {connect} from 'react-redux'
import {getPosts} from '../actions/posts'
import {addVote} from '../actions/vote'

import Placeholder from './Placeholder'


export class List extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount () {
    this.props.dispatch(getPosts())
  }

  handleClick (e) {
    let _id = [e.target.name]
    this.props.dispatch(addVote(_id))
  }

  render () {
    return (
      <div className='listContainer'>
        <p> List is here </p>
        {this.props.posts.length < 1 && <Placeholder />}
        {this.props.posts.map(post => (
          <div key={post._id}>
            <p>{post.title}</p>
            <p>{post.description}</p>
            <p>{post.username}</p>
            <p id={`${post._id}-votes`}>Votes: {post.votes}</p>
            <button name={post._id} onClick={this.handleClick}>Like</button>
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
