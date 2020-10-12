import React from "react"
import PropTypes from 'prop-types';
const filter = () => {
  return (
    <>
      <h1 className='filters__title'>Filters</h1>
      <div className='filter'>
        <h3 className='filter__title'>Launch Year</h3>
        <div className='filter__lists'></div>
      </div>
    </>
  )
}
filter.propsTypes = {
  title: PropTypes.string.isRequired,
  filters: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.number
    ])
  })).isRequired
}
export default filter