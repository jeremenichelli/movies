import SearchBox from './search-box'
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => ({
  startLoading: () => dispatch({ type: 'START_LOADING' }),
  stopLoading: () => dispatch({ type: 'STOP_LOADING' }),
  resetResults: () => dispatch({ type: 'RESET_RESULTS' }),
  setResults: (results, total) => dispatch({ type: 'SET_RESULTS', results, total }),
  setSearchTitle: (title) => dispatch({ type: 'NEW_SEARCH', title })
})

export default connect(null, mapDispatchToProps)(SearchBox)
