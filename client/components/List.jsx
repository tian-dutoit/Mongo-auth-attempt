import React from 'react'
import {connect} from 'react-redux'

import {getTestdb} from '../actions/test'

export class List extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }
  componentDidMount () {
    this.props.dispatch(getTestdb())
  }

  render () {
    console.log(this.props.test.staff)
    return (
      <div className='list-container'>
        <p> List is here </p>
        {this.props.test.staff.map(staff => (
          <div key={staff._id}>
            <p>{staff.role}: {staff.name}</p>
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    test: state.test
  }
}

export default connect(mapStateToProps)(List)
