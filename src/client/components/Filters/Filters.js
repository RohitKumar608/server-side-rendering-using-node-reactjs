import React from "react"
import filter from './Filter'

const filters = ({launchYears, launchStatus}) => {
  return (
    <section className='filters'>
      <h1 className='filters__title'>Filters</h1>
      <filter title='Launch Year' filters={launchYears} />

      <div className='filter'>
        <h3 className='filter__title'>Launch Year</h3>
        <div className='filter__lists'></div>
      </div>
      <div className='filter'>
        <h3 className='filter__title'>Successful Launch</h3>
        <div className='filter__lists'></div>
      </div>
      <div className='filter'>
        <h3 className='filter__title'>Successful Landing</h3>
        <div className='filter__lists'></div>
      </div>
    </section>
  )
}

export default filters
