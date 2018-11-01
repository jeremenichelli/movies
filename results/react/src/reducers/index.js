import { combineReducers } from 'redux'
import loading from './loading'
import searchTitle from './search-title'
import results from './results'

export default combineReducers({
  loading,
  searchTitle,
  results,
})
