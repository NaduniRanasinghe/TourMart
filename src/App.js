import React, { Component } from 'react';
import './App.css';
// import Login from "./Login";
import RegistrationForm from "./RegistrationForm"



class App extends Component {
    render() {
        return (

            <div className="container">

                <RegistrationForm/>
            </div>
        );
    }
}

export default App;