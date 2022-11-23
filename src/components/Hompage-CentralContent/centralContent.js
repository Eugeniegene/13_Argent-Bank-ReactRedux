import PropTypes from 'prop-types'

import "./centralContent.css"

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