import { combineReducers } from 'redux'

import user from './modules/user/reducer'
import common from './modules/common/reducer'
import auth from './modules/auth/reducer'
import post from './modules/post/reducer'

const rootReducer = combineReducers({
  auth,
  user,
  common,
  post
})

export default rootReducer
