import { configureStore } from '@reduxjs/toolkit'

import profileActionReducer from './userFeatures/userData.js'
import isUserLoggedInActionReducer from "./userFeatures/userLoggedIn.js"
import errorUserLoginActionReducer from "./userFeatures/errorUserData.js"

const store = configureStore({
  reducer: {
    profileAction: profileActionReducer,
    isUserLoggedInAction: isUserLoggedInActionReducer,
    errorUserLoginAction: errorUserLoginActionReducer
  }
})

export default store
