import React from "react"
import Filter from "./Filter"

const filters = ({
  launchYears,
  launchStatus,
  handleFilters,
  selectedFilter,
}) => {
  const { launch_year, launch_success, land_success } = selectedFilter
  return (
    <section className='filters'>
      <h1 className='filters__title'>Filters</h1>
      <Filter
        selectedValue={launch_year}
        handleFilters={handleFilters}
        title='Launch Year'
        filterName='launch_year'
        filters={launchYears}
      />
      <Filter
        selectedValue={launch_success}
        handleFilters={handleFilters}
        title='Successful Launch'
        filterName='launch_success'
        filters={launchStatus}
      />
      <Filter
        selectedValue={land_success}
        handleFilters={handleFilters}
        title='Successful Landing'
        filterName='land_success'
        filters={launchStatus}
      />
    </section>
  )
}

export default filters
