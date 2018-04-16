import {RECEIVE_TESTDB} from '../actions/test'

const test = (state = {staff: [{_id: 'id1', name: 'Tian', role: 'Dev'}]}, action) => {
  switch (action.type) {
    case RECEIVE_TESTDB:
      return action
    default:
      return state
  }
}

export default test
