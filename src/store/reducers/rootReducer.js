import authReducer from './authReducer'
import friendReducer from './friendReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: authReducer,
  friend: friendReducer
})

export default rootReducer