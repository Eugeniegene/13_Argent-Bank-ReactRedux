import PropTypes from 'prop-types'

import "./centralContent.css"

/**
 * @param {String} image gets the image of for the information bloc
 * @param {String} titre gets the title of the information bloc
 * @param {String} description adds a description to the information bloc.
 * @component
 */

function CentralContentData ({ image, title, info }) {
  return (
    <div className='centralContentData'>
      <img src={image} alt='centralData' />
      <h3> {title} </h3>
      <span> {info} </span>
    </div>
  )
}

CentralContentData.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired
}
export default CentralContentData