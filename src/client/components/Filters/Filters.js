import React from "react"
import Filter from './Filter'

const filters = ({launchYears, launchStatus}) => {
  return (
    <section className='filters'>
      <h1 className='filters__title'>Filters</h1>
      <Filter title='Launch Year' filters={launchYears} />
      <Filter title='Successful Launch' filters={launchStatus} />
      <Filter title='Successful Landing' filters={launchStatus} />
    </section>
  )
}

export default filters
