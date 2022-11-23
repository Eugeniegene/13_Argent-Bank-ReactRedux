import { createAction, createReducer } from '@reduxjs/toolkit'

/**
 * initially, the data will be set to be null 
 */
const initialState = {
  data: false
}

/**
 * exporting the const errorUserLoginAction which will allow us to create an action
 */
export const errorUserLoginAction = createAction('errorLoginAction')

/**
 * exporting const reating the reducer
 */
export default createReducer(initialState, (builder) => {
  builder.addCase(errorUserLoginAction, (state, action) => {
    state.data = action.payload
  })
})