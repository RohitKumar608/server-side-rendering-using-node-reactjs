import React, {Component} from 'react';
import {renderRoutes} from 'react-router-config';

class CustomLayout extends Component {

    render() {
        return (
            <>
                {renderRoutes(this.props.route.routes)}
            </>
        );  
    }
};

export default {
    component: CustomLayout
};

