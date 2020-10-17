import React, { PureComponent } from "react"
import { Helmet } from "react-helmet"
import { launchYears, launchStatus } from "../constants/FiltersTypes"
import Filters from "../components/Filters/Filters"
import Cards from "../components/Card/Cards"
import { withRouter } from "react-router"
import PropTypes from "prop-types"
import { connect } from 'react-redux';
import {fetchPosts} from '../actions/index';
class HomePage extends PureComponent {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  state = {
    launch_year: null,
    launch_success: null,
    land_success: null,
  }
  componentDidMount(){
    const { getPosts } = this.props
    getPosts()
  }
  handleFilters = (eventName, value) => {
    // If the user already applies the filter and clicks on the same filter again, we are removing that filter
    const filterValue = this.state[eventName] === value ? null : value
    this.setState({ [eventName]: filterValue }, () => {
      this.handleQueryParamsTriggerAction()
    })
  }
  handleQueryParamsTriggerAction = () => {
    const { launch_year, launch_success, land_success } = this.state
    const { history } = this.props
    let queryParams = ""
    if (launch_year !== null)
      queryParams = setQueryParams(queryParams, 'launch_year', launch_year)
    if (launch_success !== null)
      queryParams = setQueryParams(queryParams, 'launch_success', launch_success)
    if (land_success !== null)
      queryParams = setQueryParams(queryParams, 'land_success', land_success)
    history.push(`?${queryParams}`);
  }
  setQueryParams = (queryParams, filterKey, filterValue) => {
    return queryParams
    ? `${queryParams}&${filterKey}=${filterValue}`
    : `${filterKey}=${filterValue}`
  }
  head() {
    return (
      <Helmet bodyAttributes={{ class: "homePage" }}>
        <title>{`Home Page - React Starter Kit`}</title>
      </Helmet>
    )
  }

  render() {
    const { posts } = this.props.postData
    return (
      <div className='main'>
        <h1 className='main__title'>SpaceX Launch Programs</h1>
        <div className='contents'>
          <Filters
            selectedFilter={this.state}
            handleFilters={this.handleFilters}
            launchYears={launchYears}
            launchStatus={launchStatus}
          />
          <section className='cards__section'>
            <Cards data={posts} lazyClassName='lazy__load__images' />
          </section>
        </div>
      </div>
    )
  }
}

const  mapStateToProps = (state) => {
  return {
      postData: state.post
  };
};

function loadData (store){
  return store.dispatch(fetchPosts());
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: (query) => dispatch(fetchPosts(query)),
  }
}

HomePage.defaultProps = {
  postData: {}
}

export default {
  loadData: loadData,
  component: connect(mapStateToProps, mapDispatchToProps)(withRouter(HomePage)),
}
