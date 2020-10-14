import React from "react"
import PropTypes from "prop-types"
import Button from "../Button/Button"
const filter = ({
  title,
  filters,
  filterName,
  handleFilters,
  selectedValue,
}) => {
  const createFilter = () => {
    const filtersTypes = filters.map(({ id, value }) => {
      const isSelected = selectedValue === value
      return (
        <Button
          handleFilters={handleFilters}
          filterName={filterName}
          id={id}
          value={value}
          isSelected={isSelected}
        />
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
  filterName: PropTypes.string.isRequired,
  handleFilters: PropTypes.func.isRequired,
  selectedValue: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
}
export default filter
