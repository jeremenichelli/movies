const searchTitle = (state = '', { type, title }) => {
  switch (type) {
    case 'RESET_RESULTS':
      return ''
    case 'NEW_SEARCH':
      return title
    default:
      return state
  }
}

export default searchTitle