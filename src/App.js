import React, { Component } from 'react';
import './App.css';
// import Login from "./Login";
import AvailableAccomadation from "./AvailableAccomadation"



class App extends Component {
    render() {
        return (

            <div className="container">

                <AvailableAccomadation/>
            </div>
        );
    }
}

export default App;