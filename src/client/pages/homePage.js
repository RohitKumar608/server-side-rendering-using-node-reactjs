import React, { PureComponent } from "react"
import { Helmet } from "react-helmet"
import { launchYears, launchStatus} from '../constants/FiltersTypes'
import Filters from '../components/Filters/Filters'

class HomePage extends PureComponent {
  head() {
    return (
      <Helmet bodyAttributes={{ class: "homePage" }}>
        <title>{`Home Page - React Starter Kit`}</title>
      </Helmet>
    )
  }

  render() {
    return (
      <div className='main'>
        <h1 className='main__title'>SpaceX Launch Programs</h1>
        <div className='contents'>
          <Filters launchYears={launchYears} launchStatus={launchStatus} />
          <section className='contents'></section>
        </div>
      </div>
    )
  }
}

export default {
  component: HomePage,
}
