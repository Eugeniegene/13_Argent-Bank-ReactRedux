import { configureStore } from '@reduxjs/toolkit'

import { userDataReducer } from './user/userReducer.js'

/**
 * gets all the data in the reducer.
 */

const store = configureStore({
  reducer:{
    userData:userDataReducer
  }
})
export default store
