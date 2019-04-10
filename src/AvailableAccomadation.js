import React, { Component } from 'react';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import Availableaccomadation from './pages/Availableaccomadation';

import './App4.css';

class AvailableAccomadation extends Component {
    render() {
        return (

            <Router basename="/TourMartregistration.lk/">

                <div className="App">

                    <div className="App__Form">
                        <h1>Available Accomadations</h1>
                        <div className="FormTitle">
                            <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link"></NavLink>
                        </div>
                        <Route exact path="/" component={Availableaccomadation}>
                        </Route>

                    </div>

                </div>
            </Router>
        );
    }
}

export default AvailableAccomadation;