import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TourGuideRegistration extends Component {
    constructor() {
        super();

        this.state = {
            fullname:'',
            nicNo:'',
            address:'',
            licenceId:'',
            workingarea:'',
            languages:'',
            gender:'',
            contactNo:'',
            email: '',
            otherDetaisl:'',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        console.log('The form was submitted with the following data:');
        console.log(this.state);
    }

    render() {
        return (
            <div className="FormCenter">
                <form onSubmit={this.handleSubmit} className="FormFields">
                    <h1> Tour Guide Registration</h1>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="name">Full Name :</label>
                        <input type="text" id="name" className="FormField__Input" placeholder="Enter Fullname " name="fullname" value={this.state.fullname} onChange={this.handleChange} />
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="name">NIC Number</label>
                        <input type="text" id="name" className="FormField__Input" placeholder="Enter NIC number" name="nicNo" value={this.state.nicNo} onChange={this.handleChange} />
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="password">Address</label>
                        <input type="password" id="password" className="FormField__Input" placeholder="Enter Address" name="name" value={this.state.address} onChange={this.handleChange} />
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="password">Licence ID</label>
                        <input type="password" id="password" className="FormField__Input" placeholder="Enter Licence ID" name="licenceID" value={this.state.address} onChange={this.handleChange} />
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="email">Working Area</label>
                        <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="email">Languages</label>
                        <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="email">Gender</label>
                        <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="email">Contact No</label>
                        <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="email">Email</label>
                        <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
                    </div>

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="email">Other Details</label>
                        <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
                    </div>

                    <div className="FormField">
                        <button className="FormField__Button mr-20">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default TourGuideRegistration;
