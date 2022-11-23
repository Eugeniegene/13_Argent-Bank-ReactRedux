import React from 'react'

import { useSelector } from 'react-redux'

/**
 * selector function creation to state if the user exists in database, and shows profile if connected
 */
export function DisplayError() {
  const loginError = useSelector((state) => state.errorLogin)
  return <p className="error">{loginError.data === true ? ' Unknown passeword or email, please try again' : ''}</p>
}

export const isUserLoggedInSelector = (state) => state.isLoggedIn

export const errorLoginSelector = (state) => state.errorLogin

export const profileDataSelector = (state) => state.dataProfil