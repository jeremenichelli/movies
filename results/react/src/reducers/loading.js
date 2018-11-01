const loading = (state = false, action) => {
  switch (action.type) {
    case 'START_LOADING':
      return true
    case 'STOP_LOADING':
      return false
    default:
      return state
  }
}

export default loading
