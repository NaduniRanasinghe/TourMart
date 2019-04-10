import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';

import './App.css';
import Login from "./Login";

class App extends Component {
    render() {
        return (

            <div className="container">
                <Login/>
            </div>

        );
    }
}

export default App;