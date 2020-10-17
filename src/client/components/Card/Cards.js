import React from 'react'
import Card from './Card'
import withUseIO from '../../HOC/WithUseIO'
import PropTypes from 'prop-types'

const cards = ({ data, defaultImage, lazyClassName }) => {
  return (
    data?.length > 0 &&
    data.map(
      (
        {
          mission_name,
          launch_year,
          launch_success,
          mission_id,
          flight_number,
          rocket,
        },
        index
      ) => (
        <Card
          key={flight_number}
          mission_name={mission_name}
          launch_year={launch_year}
          launch_success={launch_success}
          flight_number={flight_number}
          mission_id={mission_id}
          landingSuccess={rocket?.first_stage?.cores[0]?.land_success || false}
          lazyClassName={lazyClassName}
          rocket={rocket}
          // featured_img={`https://source.unsplash.com/collection/${index}/1600x900`}
          defaultImage={defaultImage}
        />
      )
    )
  )
}
cards.propTypes = {
  data: PropTypes.array.isRequired,
  defaultImage: PropTypes.string.isRequired,
  lazyClassName: PropTypes.string.isRequired
}
export default withUseIO(cards)
