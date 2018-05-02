import {SUBMITTED} from '../actions/submit'

const submitted = (state = {submitted: false}, action) => {
  switch (action.type) {
    case SUBMITTED:
      return {
        submitted: action.submitted
      }
    default:
      return state
  }
}

export default submitted
