import React, {Component} from 'react';
import { Helmet } from 'react-helmet';


class NotFoundPage extends Component {

    head(){
        return (
            <Helmet bodyAttributes={{class: "notFound"}}>
            <title>{`404 not found - React Starter Kit`}</title>
            </Helmet>
        );
    }

    render(){
        return (
                <div>
                    <h3>Page not found</h3>
                </div>
        );
    }
    
}

export default {
  component: NotFoundPage
};