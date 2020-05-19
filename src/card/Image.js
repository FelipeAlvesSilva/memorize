import React from 'react'
import PropTypes from 'prop-types'

const Image = ({ src, alt, style }) => (
  <img src={src} alt={alt} style={style}></img>
)

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  style: PropTypes.string
}

export default Image