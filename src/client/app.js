import React, { Component } from 'react'
import { renderRoutes } from 'react-router-config'
import ErrorBoundary from './HOC/ErrorBoundary'
import PropTypes from 'prop-types'
class App extends Component {
  static propTypes = {
    route: PropTypes.object
  }
  render() {
    return (
      <ErrorBoundary>{renderRoutes(this.props.route.routes)}</ErrorBoundary>
    )
  }
}

export default {
  component: App,
}
