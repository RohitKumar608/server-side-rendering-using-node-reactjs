import React from 'react'

const card = () => {
  return(
    <div className="card">
      <div className="card__image" style={{backgroundImage: "url('https://farm8.staticflickr.com/7615/16670240949_8d43db0e36_o.jpg')"}}>
      </div>
      <h3 className='card__name highlight'>Falcon #1</h3>
      <h3 className='card__name'>Mission Ids: </h3>
      <h4 className="card__launch">Launch Year: 2006</h4>
      <h4 className="card__launch">Successful Launch: False</h4>
      <h4 className="card__launch">Successful Landing: False</h4>
    </div>
  )
}

export default card;