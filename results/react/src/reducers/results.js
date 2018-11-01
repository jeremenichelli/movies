const defaultResults = { total: 0, data: null, page: 0 }

const results = (state = defaultResults, action) => {
  switch (action.type) {
    case 'SET_RESULTS': {
      const data = action.results
      const total = action.total
      return { data, total, page: 1 }
    }
    case 'ADD_RESULTS': {
      const data = [ ...state.data, ...action.results ]
      const page = ++state.page
      return Object.assign({}, state, { data, page })
    }
    case 'RESET_RESULTS':
      return Object.assign({}, defaultResults)
    default:
      return state;
  }
}

export default results
