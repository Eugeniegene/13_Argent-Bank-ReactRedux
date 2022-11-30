import React from "react"
import UserGeneralData from "../../components/User-UserNameHeader/userProfileGeneralData.js"

import AccountData from '../../components/Account-CentralData/accountData.js'

import "./userProfile.css"

/**
 * Show the user page. 
 * UserGeneralData corresponds to the user's personnal header, with their name and the edit option. 
 * Account Data corresponds the three data cards showing their recent transactions.
 * N-B : This page will only be accessible if the user is succesfully connected. 
 * A non-connected user will not have acces to this page. 
 */

const UserProfile = () => {
    return (
        <main className="accountCentralBackground">
            <UserGeneralData />
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