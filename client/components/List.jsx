import React from 'react'
import {connect} from 'react-redux'

// import {getTestdb} from '../actions/test'
import {getPosts} from '../actions/posts'

export class List extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }
  componentDidMount () {
    this.props.dispatch(getPosts())
  }

  render () {
    console.log(this.props.posts)
    return (
      <div className='list-container'>
        <p> List is here </p>
        {this.props.posts.map(post => (
          <div key={post.id}>
            <p>{post.title}</p>
            <p>{post.description}</p>
            <p>{post.username}</p>
          </div>
        ))}
        {/* {this.props.test.staff.map(staff => (
          <div key={staff._id}>
            <p>{staff.role}: {staff.name}</p>
          </div>
        ))} */}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(List)
