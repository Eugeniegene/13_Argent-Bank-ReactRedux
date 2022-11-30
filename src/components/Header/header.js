import React from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import logo from "../../assets/argentBankLogo.png"
import { userLogout } from "../../redux/user/userActions"

import "./header.css"

/**
 * creates a header
 * the header will be updated depending on connexion status. 
 * If the user is connected, the component will display their name  + a signOut option.
 * If the user is not connected,  the component will only display a sign in option.
 * @component
 */

const Header = () => {

  let navigate = useNavigate()
  const dispatch = useDispatch()
  const { token } = useSelector((state) => state.userData)
  const { firstName } = useSelector((state) => state.userData)

  const setLogout = () => {
    dispatch(userLogout())
    navigate('/')
  }
  return (
    <nav className="header-bloc">
        <Link to="/">
            <img className="logo" alt="argent-bank-logo" src={logo} />
        </Link>
        <div className="logged-conditioning">
        {!token ? (
          <Link to='/login' className='notConnected'>
            <i className='fa fa-2x fa-user-circle' />
            <p> Sign In </p>
          </Link>
          ) : ( ''
          )}   
          {token ? (
            <div className='connected-User' display="flex">
              <Link to='/profile'>
                <i className='fa-solid fa-2x fa-circle-user' />
                <p>{firstName}</p>
              </Link>
            </div>
            ) : ( ''
          )}
            {token ? (
              <div className='signout' display="flex">
                <Link onClick={setLogout} className="main-nav-item" to='/' >
                  <i className='fa-solid fa-2x fa-arrow-right-from-bracket' />
                  <p> Sign out </p>
                </Link>
              </div>
            ) : ( ''
          )}
          </div>

    </nav>
  )
}
export default Header