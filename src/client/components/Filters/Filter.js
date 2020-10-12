import React from "react"
import PropTypes from "prop-types"
import Button from '../Button/Button'
const filter = ({ title, filters }) => {
  const createFilter = () => {
    const selectedFilter = []
    const filtersTypes = filters.map(({ id, value }) => {
      const isSelected = selectedFilter.includes(id)
      return (
        <Button id={id} value={value} isSelected/>
      )
    })
    return filtersTypes
  }
  return (
    <div className='filter'>
      <h3 className='filter__title'>{title}</h3>
      <div className='filter__lists'>{createFilter()}</div>
    </div>
  )
}
filter.propsTypes = {
  title: PropTypes.string.isRequired,
  filters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
    })
  ).isRequired,
}
export default filter
