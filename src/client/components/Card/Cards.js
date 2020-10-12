import React from 'react'
import Card from './Card'
import withUseIO from '../../HOC/WithUseIO'

const cards = ({data}) => {
  return(
    <Card data={data} lazyClassName='lazy__load__images' />
  )
}

export default withUseIO(cards)