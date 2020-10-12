import React, {Component} from 'react';
import {renderRoutes} from 'react-router-config';


class App extends Component {

    render() {
        return (
            <>
                {renderRoutes(this.props.route.routes)}
            </>
        );  
    }

};

export default {
    component: App
};