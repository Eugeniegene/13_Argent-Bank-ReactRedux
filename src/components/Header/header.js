import React from "react"
import { Link } from "react-router-dom"
import logo from "../../assets/argentBankLogo.png"

import "./header.css"

const Header = () => {

  return (
    <nav className="header-bloc">
        <Link to="/">
            <img className="logo" alt="argent-bank-logo" src={logo} />
        </Link>
        <Link to='/Login' className='notConnected'>
          <i className='fa fa-2x fa-user-circle' />
          <p> Sign In </p>
        </Link>
        <div className='connected'>
          <Link to='/Profile'>
            <i className='fa-solid fa-2x fa-circle-user' />
            <p> Name</p>
          </Link>
          <Link to='/' >
            <i className='fa-solid fa-arrow-right-from-bracket' />
            <p> Sign out </p>
          </Link>
        </div>
    </nav>
  )
}
export default Header