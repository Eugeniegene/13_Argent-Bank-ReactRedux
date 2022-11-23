import store from '../redux/store.js'

import {errorUserLoginAction} from "../redux/userFeatures/errorUserData.js"
import {isUserLoggedInAction} from "../redux/userFeatures/userLoggedIn.js"
import {profileActionData} from "../redux/userFeatures/userData.js"

/**
 * baseURL calls the backendAPI we will need
 */
//const baseURL = "http://localhost:3001/api/v1/user/"

/**
 *  This function will fetch data and return a promise.
 *  Email and Password will be required. 
 *  Used in the Login page to identify one of our two users
 */
 async function getUserLoginData(email, password) {
	const requestOptions = {
	  method: 'POST',
	  body: JSON.stringify({ email: email, password: password }),
	  headers: { 'Content-Type': 'application/json' }
	}
	return fetch('http://localhost:3001/api/v1/user/login', requestOptions)
	  .then((res) => res.json())
	  .then((response) => {
		const { token } = response.body
		localStorage.setItem('token', token)
		store.dispatch(errorUserLoginAction(false))
	  })
	  .catch(() => {
		console.log('Can not get API data')
	  })
  }

/**
 *  This function will fetch data and return a promise.
 *  All user information will be returned. 
 *  Used in the profile page to identify one of our two users
 */
 async function getUserProfileData() {
	const requestOptions = {
	  method: 'POST',
	  headers: {'Content-Type': 'application/json',
		Authorization: `Bearer ${localStorage.getItem('token')}`
	  }
	}
	return fetch('http://localhost:3001/api/v1/user/profile', requestOptions)
	  .then((res) => res.json())
	  .then((response) => {
		console.log(response)
		const { firstName, lastName } = response.body
		store.dispatch(
			profileActionData({
			firstName: firstName,
			lastName: lastName
		  })
		)
		store.dispatch(isUserLoggedInAction())
	  })
	  .catch(() => {})
  }
/**
 *  This function will fetch data and return a promise.
 *  It will allow the user to edit their data on their profile page.
 */
  async function getProfilePut(newFirstName, newLastName) {
	const requestOptions = {
	  method: 'PUT',
	  body: JSON.stringify({ firstName: newFirstName, lastName: newLastName }),
	  headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}` },
	}
	return fetch('http://localhost:3001/api/v1/user/profile', requestOptions)
	  .then((res) => res.json())
	  .then((response) => {
		console.log(response)
		const { firstName, lastName } = response.body
		store.dispatch(
		  profileActionData({
			firstName: firstName,
			lastName: lastName
		  })
		)
	  })
	  .catch(() => {})
  }

export {getProfilePut, getUserProfileData, getUserLoginData}