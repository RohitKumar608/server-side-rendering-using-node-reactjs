import React, { Component } from 'react'
import { renderRoutes } from 'react-router-config'
import PropTypes from 'prop-types'
class CustomLayout extends Component {
  static propTypes = {
    route: PropTypes.object
  }
  render() {
    return <>{renderRoutes(this.props.route.routes)}</>
  }
}

export default {
  component: CustomLayout,
}