import { createAction, createReducer } from '@reduxjs/toolkit'

/**
 * exporting the const isUserLoggedInAction which will allow us to create an action
 */
export const isUserLoggedInAction = createAction('isLogAction')

/**
 * exporting const reating the reducer
 */
export default createReducer(false, (builder) => {
  builder.addCase(isUserLoggedInAction, (state) => !state)
})