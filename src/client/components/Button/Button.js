import React from 'react'
import PropTypes from 'prop-types'

const button = ({id, isSelected, value, style, newCssClasses}) => (
  <button key={id} className={`btn ${isSelected ? "Active" : ""} ${newCssClasses}`} style={{...style}}>
      {typeof value !== "boolean" ? value : value.toString()}
    </button>
)

button.propsTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  isSelected: PropTypes.bool.isRequired,
  newCssClasses: PropTypes.string,
  style: PropTypes.object
}
button.defaultProps = {
  isSelected: false,
  newCssClasses: null
}
export default button;
