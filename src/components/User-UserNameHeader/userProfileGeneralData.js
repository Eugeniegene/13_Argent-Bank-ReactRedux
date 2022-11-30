import React from "react"

import {updateProfileAction} from '../../redux/user/userActions.js'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

const UserGeneralData = () => {

  /**
   * fetches all data inside from userActions.js.
   * This const is only visible when the user is logged in. 
   * A form allows the user to edit their name, save or cancel their changes.
   * As soon as the name is edited, the user's profile will be updated with recent changes. 
   * The header will also be updated in consequence, desplaying the user's new first name.
   */
  const dispatch = useDispatch()

  const { firstName } = useSelector((state) => state.userData)
  const { lastName } = useSelector((state) => state.userData)
  const { token } = useSelector((state) => state.userData)
  const { editSuccess } = useSelector((state) => state.userData)

  const [editFirstName, setEditFirstname] = useState()
  const [editLastName, setEditLastName] = useState()

  const [editDataButton, setEditDataButton] = useState('')

  const editNameFunction = (e) => {
    e.preventDefault()
    setEditDataButton((current) => !current)
  }

  const sumbitForm = (e) => {
    e.preventDefault()
    dispatch(updateProfileAction(token, editFirstName, editLastName))
    if ({ editSuccess }) {
      setEditDataButton((current) => !current)
    }
  }
    return (
      <section>
        {!editDataButton ? (
        <div className='generalDataUser'>
          <h1> Welcome back <br /> {firstName} {lastName} </h1>
          <button className="editname" onClick={editNameFunction}> Edit Name </button>
        </div>
        ) : (
        <form className="user-form" onSubmit={sumbitForm}>
          <h1> Welcome back </h1>
          <div className="inputContainer">
            <div className="input-wrapper">
              <input type="text" id="firstname" placeholder={firstName} onChange={(e) => setEditFirstname(e.target.value)}/>
            </div>
            <div className="input-wrapper">
              <input type="text" id="lastname" placeholder={lastName} onChange={(e) => setEditLastName(e.target.value)} />
            </div>
          </div>
          <div className="user-form-buttons">
            <button className="user-form-button"> Save </button>
            <button className="user-form-button" onClick={editNameFunction}> Cancel </button>
          </div>
        </form>
         )}
        </section>
      )
}

export default UserGeneralData
