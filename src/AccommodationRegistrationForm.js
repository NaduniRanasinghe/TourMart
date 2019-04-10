import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import AccommodationRegistration from './pages/AccommodationRegistration';

import './App3.css';


class AccommodationRegistrationForm extends Component {
    render() {
        return (

            <Router basename="/TourMartregistration.lk/">
                <div className="App">

                    <div className="App__Form">

                        <div className="FormTitle">
                            <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link"></NavLink>
                        </div>
                        <Route exact path="/" component={AccommodationRegistration}>
                        </Route>

                    </div>

                </div>
            </Router>
        );
    }
}

export default AccommodationRegistrationForm;