import { combineReducers } from 'redux'
import RequestsReducer from './RequestsReducer'

export default combineReducers({
  requests: RequestsReducer,
})
