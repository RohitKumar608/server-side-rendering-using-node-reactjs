import React from "react"
import Card from "./Card"
import withUseIO from "../../HOC/WithUseIO"

const cards = ({ data, defaultImage, lazyClassName }) => {
  return (
    data?.length > 0 &&
    data.map((post, index) => (
      <Card
        key={post.flight_number}
        post={post}
        lazyClassName={lazyClassName}
        featured_img={`https://source.unsplash.com/collection/${index}/1600x900`}
        defaultImage={defaultImage}
      />
    ))
  )
}

export default withUseIO(cards)
