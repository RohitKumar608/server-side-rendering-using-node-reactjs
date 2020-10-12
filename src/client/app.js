import React, { Component } from "react"
import { renderRoutes } from "react-router-config"
import ErrorBoundary from "./HOC/ErrorBoundary"
class App extends Component {
  render() {
    return (
      <ErrorBoundary>{renderRoutes(this.props.route.routes)}</ErrorBoundary>
    )
  }
}

export default {
  component: App,
}
