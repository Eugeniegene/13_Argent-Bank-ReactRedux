import {USER_LOGIN_SUCCESS,	USER_LOGIN_FAIL,USER_LOGOUT,USER_PROFILE_SUCCESS, USER_PROFILE_FAIL, USER_PROFILE_RESET,USER_PROFILE_UPDATE} from "../user/userReducer"
import axios from 'axios'
  
/**
 * ALL ENDPOINTS ARE LISTED BELLOW:
 * baseURL = "http://localhost:3001/api/v1/user/" => base url which allows the user to access the website
 * loginURL = "http://localhost:3001/api/v1/login" => url allowing the user to access the login page 
 * profileURL = "http://localhost:3001/api/v1/profile" => url allowing the user to access their profile. 
 * IMPORTANT NOTICE : The profile page will ONLY be available once the user gets successfully connected to their account.
 * PUT method will allow the user to edit their current name. 
 */


/**
 *  This const will fetch data and return a promise.
 *  Email and Password will be required. 
 * 	If the user is not recognized, an error will occur and 
 *  a message will be displayed. 
 */

 export const loginAction = (email, password) => async (dispatch) => {
	try {
	  const { data } = await axios.post(
		'http://localhost:3001/api/v1/user/login',
		{ email:email, password:password },
		)
	  dispatch({ type: USER_LOGIN_SUCCESS, payload: data })
	  dispatch(userProfileAction(data.body.token))
	} catch (error) {
	  dispatch({
		type: USER_LOGIN_FAIL,
		payload:
		  error.response && error.response.data.message
			? error.response.data.message
			: error.message,
	  })
	}
  }

/**
 *  This const will fetch data and return a promise.
 *  All user information will be returned. 
 *  The token must be identified in order to allow the user 
 * 	to access the page.
 */
  export const userProfileAction = (token) => async (dispatch) => {
	try {
	  const config = {
		headers: {
		  'Content-Type': 'application/json',
		  Authorization: `Bearer ${token}`,
		},
	  }
	  const { data } = await axios.post(
		'http://localhost:3001/api/v1/user/profile',
		{ token },
		config
	  )
	  dispatch({ type: USER_PROFILE_SUCCESS, payload: data, token: token })
	} catch (error) {
	  dispatch({
		type: USER_PROFILE_FAIL,
		payload:
		  error.response && error.response.data.message
			? error.response.data.message
			: error.message,
	  })
	}
  }

/**
 *  This const will fetch data and return a promise.
 *  It will allow the user to edit their data on their profile page.
 *	The token remains necessary to get the data in the header and on the 
 *  profile page.
 */
  export const updateProfileAction =(token, editFirstName, editLastName) => async (dispatch) => {
	  try {
		const config = {
		  headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		  },
		}
		const { data } = await axios.put(
		  'http://localhost:3001/api/v1/user/profile',
		  { firstName: editFirstName, lastName: editLastName },
		  config
		)
		dispatch({ type: USER_PROFILE_UPDATE, payload: data, token: token })
	  } catch (error) {
		dispatch({
		  type: USER_PROFILE_FAIL,
		  payload:
			error.response && error.response.data.message
			  ? error.response.data.message
			  : error.message,
		})
	  }
	}
 /**
 *  This const will fetch data and return a promise.
 *  The user will be logged out and sent back to the index page.
 */
  export const userLogout = () => async (dispatch) => {
	dispatch({ type: USER_LOGOUT })
	dispatch({ type: USER_PROFILE_RESET })
  }