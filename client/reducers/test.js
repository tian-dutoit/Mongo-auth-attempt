const test = (state = [], action) => {
  switch (action.type) {
    case 'TEST_THING':
      return action.thing
    default:
      return state
  }
}

export default test
