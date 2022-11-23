import React from "react"
import { Navigate } from 'react-router' 
import {useState} from 'react'

import { useSelector } from 'react-redux'
import { isUserLoggedInSelector, profileDataSelector } from '../../redux/featuresSelector.js'
import {getProfilePut} from "../../services/getAllUserData.js"

import AccountData from '../../components/Account-CentralData/accountData.js'

import "./userProfile.css"

const UserProfile = () => {

    const loggedUser = useSelector(profileDataSelector)
    const [editNameData, setEditNameData] = useState({ firstName: '', lastName: '' })

    /**
     * The following const and async functions will allow the user to edit
     * last name and first name.
     */
    const [dataChangerOpen, setDataChangerOpen] = useState(false)

    async function DataChangerOpen() {
        setDataChangerOpen(true)
    }
    async function DataChangerClosed() {
        setDataChangerOpen(false)
    }

    /**
     * gets the new value inside the input to 
     * show another name to the user
     */
    const getInput = (e) => {
        e.persist()
        const { name, value } = e.target
        setDataChangerOpen((state) => ({
          ...state,
          [name]: value
        }))
      }

    /**
     * will submit the form along with changed data
     * following submission, changes will have occured.
     */
    const submitForm = (e) => {
        e.preventDefault()
        getProfilePut(editNameData.firstName, editNameData.lastName)
    }

    /**
     * if the user is successfully connected, the page will be visible.
     * Otherwise, the user will be redirected to the index page.
     */

    const isUserLoggedIn = useSelector(isUserLoggedInSelector)
    if (isUserLoggedIn === false) {
      return <Navigate to="/" />
    }
    
    return (
        <main className="accountCentralBackground">
            <div className='generalDataUser'>
                <h1> Welcome back <br /> {"Troy"} {"Terrence"} </h1>
                <button className="editButton" type="button" onClick={DataChangerOpen}> Edit Name </button>
            </div>
            <div className="accountCentralCards">
                <AccountData 
                    title='Argent Bank Checking (x8349)' 
                    amount='$2,082.79' 
                    description='Available Balance' />
                <AccountData 
                    title='Argent Bank Savings (x6712)' 
                    amount='$10,928.42' 
                    description='Available Balance' />
                <AccountData 
                    title='Argent Bank Credit Card (x8349)' 
                    amount='$184.30' 
                    description='Current Balance' />
            </div>

        </main>
    )
    }

export default UserProfile