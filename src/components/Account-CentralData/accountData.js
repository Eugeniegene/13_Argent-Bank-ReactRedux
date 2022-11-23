import PropTypes from 'prop-types'

import "./accountData.css"

/**
 * @param {String} titre allows a better view on the title of the account
 * @param {String} montant allows a better view on the amount of the account
 * @param {String} description allows a better view on the description of the account
 * @component
 */
function AccountData ({ title, amount, description }) {
  return (
    <section className='accountDataSection'>
      <div>
        <span className='accountTitle'> {title} </span>
        <p className='accountBalance'> {amount} </p>
        <p className='accountDescription'> {description} </p>
      </div>
      <div className='seeTransactions'>
        <button className='viewAllTransactions'> View transactions </button>
      </div>
    </section>
  )
}

AccountData.propTypes = {
    title: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default AccountData