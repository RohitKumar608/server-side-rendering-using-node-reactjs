import React from 'react'
import PropTypes from 'prop-types'

const button = ({ id, isSelected, value, style, newCssClasses, handleFilters, filterName }) => (
  <button
    onClick={() => handleFilters(filterName, value)}
    key={id}
    className={`btn ${isSelected ? 'selected' : ''} ${newCssClasses && newCssClasses}`}
    style={{ ...style }}
  >
    {typeof value !== 'boolean' ? value : value.toString()}
  </button>
)

button.propsTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  isSelected: PropTypes.bool.isRequired,
  newCssClasses: PropTypes.string,
  style: PropTypes.object,
  filterName: PropTypes.string.isRequired,
  handleFilters: PropTypes.func.isRequired,
}
button.defaultProps = {
  isSelected: false,
  newCssClasses: '',
}
export default button
