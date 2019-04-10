import React, { Component } from 'react';
import './App.css';
// import Login from "./Login";
import RegistrationForm from "./RegistrationForm"
import AccommodationRegistrationForm from "./AccommodationRegistrationForm";



class App extends Component {
    render() {
        return (



            <div className="container">

            <AccommodationRegistrationForm/>
            </div>

        );
    }
}

export default App;