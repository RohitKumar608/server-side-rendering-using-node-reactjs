import React from "react"

const card = ({lazyClassName, defaultImage , featured_img}) => {
  return (
    <div className='card'>
      <div
        className={"card__image " + lazyClassName}
        data-src={featured_img || defaultImage}
        style={{
          backgroundImage: `url(${defaultImage})`,
        }}
      />
      <h3 className='card__name highlight'>Falcon #1</h3>
      <h3 className='card__name'>Mission Ids: </h3>
      <h4 className='card__launch'>Launch Year: 2006</h4>
      <h4 className='card__launch'>Successful Launch: False</h4>
      <h4 className='card__launch'>Successful Landing: False</h4>
    </div>
  )
}

export default card
