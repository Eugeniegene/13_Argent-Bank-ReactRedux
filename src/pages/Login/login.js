import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginAction } from '../../redux/user/userActions'
import { useNavigate } from 'react-router'

import './login.css'

/**
 * Creates the login page.
 * Login form is integrated inside this page. 
 * LOGIN CONDITIONS :
 * The user must enter one of the two email adresses and passwords to access their profile. 
 * user1 - TONY STARK , email : tony@stark.com , password : password123;
 * user2 - STEVE ROGERS , email : steve@rogers.com , password : password456.
 * If the user is not found, or an error occured, an error message will appear. 
 * If the user is connected, they will get their token and will be redirected to their profile. 
 * @component
 */

const Login = () => {
  const dispatch = useDispatch()
  let navigate = useNavigate()

  const { error } = useSelector((state) => state.userData)
  const { token } = useSelector((state) => state.userData)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitForm = (e) => {
    e.preventDefault()
    dispatch(loginAction(email, password))
  }

  useEffect(() => {
    if (token) {
      navigate('/profile')
    }
  }, [token, navigate])

  return (
    <main className='login-container'>
      <section className="form-wrapper">
        <div className='formHeader'>
          <i className="fa fa-user-circle fa-4x sign-in-icon"></i>
          <h1>Sign In</h1>
        </div>
        <form onSubmit={submitForm}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id='email' autoComplete='username' required placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id='password' autoComplete='current-password' required placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="rememberMe" />
            <label htmlFor="rememberMe">Remember me</label>
          </div>
          <button className="signInButton" type="submit" name="Login"> Sign In </button>
          {error && (
            <div>
              <br />
              {error}
            </div>
            )
          }
        </form>
      </section>
    </main>
  )
}
export default Login