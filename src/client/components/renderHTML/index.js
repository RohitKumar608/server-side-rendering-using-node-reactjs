import React, { Component } from 'react'
import PropTypes from 'prop-types'

class RenderHTML extends Component {
  static propTypes = {
    wrapperClass: PropTypes.string,
    html: PropTypes.string
  }
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div
        className={`${this.props.wrapperClass}`}
        dangerouslySetInnerHTML={{ __html: this.props.html }}>
      </div>
    )
  }
}

export default RenderHTML