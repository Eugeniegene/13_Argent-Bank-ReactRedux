import React from 'react'
import { Navigate } from 'react-router' 
import { useSelector } from 'react-redux'
import {useState} from 'react'

import {getUserLoginData} from '../../services/getAllUserData.js'

import { isUserLoggedInSelector } from '../../redux/featuresSelector.js'
import './login.css'

const Login = () => {
    const [signInUser, setSignInUser] = useState({ email: '', password: '' })

    const dataInputChange = (e) => {
      e.persist()
      const { name, value } = e.target
      setSignInUser((state) => ({...state, [name]: value}))
    }
  
    const formData = (e) => {
      e.preventDefault()
      if (!signInUser.email && !signInUser.password === "") alert ('Please, enter your email and password.')
      if (!signInUser.email || !signInUser.password ) alert("Invalid entry. Please try again.")
      getUserLoginData(signInUser.email, signInUser.password)
    }
    
    const isUserLoggedIn = useSelector(isUserLoggedInSelector)
    if (isUserLoggedIn) {
      return <Navigate to='/profile' />
    }
    return (
      <main className='login-container'>
        <section className='form-wrapper'>
          <div className='formHeader'>
            <i className='fa fa-user-circle fa-4x sign-in-icon' />
            <h1> Sign In </h1>
          </div>
          <form onSubmit={formData}>
              <div className='input-wrapper'>
                  <label htmlFor='username'>Username</label>
                  <input type='text' list='usernames' id='email' required placeholder='Email' onChange={dataInputChange} autoComplete='username' />
              </div>
              <div className='input-wrapper'>
                  <label htmlFor='password'>Password</label>
                  <input type='password' id='password' required placeholder='Password' onChange={dataInputChange} autoComplete='current-password'/>
              </div>
              <div className='input-remember'>
                  <input type='checkbox' id='rememberMe' />
                  <label htmlFor='rememberMe'>Remember me</label>
              </div>
              <button
                  className='sign-in-button'> Sign In
              </button>
          </form>
        </section>
      </main>
    )
}
export default Login