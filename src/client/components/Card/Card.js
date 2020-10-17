import React from 'react'

const card = (props) => {
  const {
    mission_name,
    launch_year,
    launch_success,
    mission_id,
    flight_number,
    landingSuccess,
    lazyClassName,
    defaultImage,
    featured_img,
  } = props

  return (
    <div className='card'>
      <div
        className={`card__image ${lazyClassName} `}
        data-src={featured_img || defaultImage}
        style={{
          backgroundImage: `url(${defaultImage})`,
        }}
      />
      <h3 className='card__name highlight'>
        {mission_name} #{flight_number}
      </h3>
      <h3 className='card__name'>Mission Ids: {mission_id.join(',')}</h3>
      <h4 className='card__launch'>Launch Year: {launch_year}</h4>
      <h4 className='card__launch'>
        Successful Launch: {launch_success?.toString()}
      </h4>
      <h4 className='card__launch'>
        Successful Landing: {landingSuccess.toString()}
      </h4>
    </div>
  )
}

export default card
