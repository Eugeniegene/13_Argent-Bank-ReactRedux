import { createAction, createReducer } from '@reduxjs/toolkit'

/**
 * initially, the data will be set to be null 
 */
const initialState = {
  data: null
}

/**
 * exporting the const profileAction which will allow us to create an action
 */
export const profileActionData = createAction('dataProfilAction')

/**
 * exporting const reating the reducer
 */
export default createReducer(initialState, (builder) => {
  builder.addCase(profileActionData, (state, action) => {
    state.data = action.payload
  })
})

