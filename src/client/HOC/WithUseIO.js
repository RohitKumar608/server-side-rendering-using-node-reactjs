import React, { useEffect } from 'react'
import useIO from '../components/LazyLoading/LazyLoading'
import PropTypes from 'prop-types'

function withUseIO(Wrapped) {
  return function hocImg(props) {
    hocImg.propTypes = {
      lazyClassName: PropTypes.string,
      data: PropTypes.array,
      isImg: PropTypes.bool
    }
    const [observer, setElements, entries] = useIO({
      threshold: 0,
      rootMargin: '0px 0px 100px 0px',
      root: null,
    })
    useEffect(() => {
      if (props?.data?.length) {
        let img = Array.from(
          document.getElementsByClassName(props.lazyClassName)
        )
        setElements(img)
      }
    }, [props.data, setElements])

    useEffect(() => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let lazyImage = entry.target
          if (!props.isImg) {
            let backgroundSrc = lazyImage.dataset.src
            lazyImage.style.backgroundImage = 'url(' + backgroundSrc + ')'
          } else {
            let lazyImage = entry.target
            lazyImage.src = lazyImage.dataset.src
          }
          lazyImage.classList.remove(props.lazyClassName)
          observer.unobserve(lazyImage)
        }
      })
    }, [entries, observer])
    const defaultImage =
      'https://farm8.staticflickr.com/7615/16670240949_8d43db0e36_o.jpg'
    return <Wrapped defaultImage={defaultImage} {...props} />
  }

}
withUseIO.displayName = 'withUseIO'
export default withUseIO
