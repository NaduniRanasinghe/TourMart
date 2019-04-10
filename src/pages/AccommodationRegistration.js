import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AccommodationRegistration extends Component {
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
                    <table border={1} width={550} bgcolor={'#142142'} >
                        <tr><td> <center><h1> Accommodation Registration</h1></center></td></tr>
                    <div className="FormField">
                        <center> <label className="FormField__Label" htmlFor="name">Owner </label></center>
                        <center> <input type="text" id="name" className="FormField__Input" placeholder="Enter Fullname " name="fullname" value={this.state.fullname} onChange={this.handleChange} /></center>
                    </div>
                    <div className="FormField">
                        <center><label className="FormField__Label" htmlFor="name">NIC Number</label></center>
                        <center> <input type="text" id="name" className="FormField__Input" placeholder="Enter NIC number" name="nicNo" value={this.state.nicNo} onChange={this.handleChange} /></center>
                    </div>
                    <div className="FormField">
                        <center> <label className="FormField__Label" htmlFor="password">Address</label></center>
                        <center>    <input type="text" id="password" className="FormField__Input" placeholder="Enter Address" name="name" value={this.state.address} onChange={this.handleChange} /></center>
                    </div>
                    <div className="FormField">
                        <center>  <label className="FormField__Label" htmlFor="password">Licence ID</label></center>
                          <center>  <input type="text" id="password" className="FormField__Input" placeholder="Enter Licence ID" name="licenceID" value={this.state.address} onChange={this.handleChange} /></center>
                    </div>
                    <div className="FormField">
                        <center> <label className="FormField__Label" htmlFor="email">Number of Rooms</label></center>
                        <center><input type="text" id="email" className="FormField__Input" placeholder="" name="email" value={this.state.email} onChange={this.handleChange} /></center>
                    </div>
                    <div className="FormField">
                        <center>    <label className="FormField__Label" htmlFor="email">Number of Bathrooms</label></center>
                        <center>    <input type="text" id="email" className="FormField__Input" placeholder="" name="email" value={this.state.email} onChange={this.handleChange} /></center>
                    </div>
                    <div className="FormField">
                        <center>  <label className="FormField__Label" htmlFor="email">Attached Bathrooms available?</label></center>
                        <center>   <input type="text" id="email" className="FormField__Input" placeholder="" name="email" value={this.state.email} onChange={this.handleChange} /></center>
                    </div>
                    <div className="FormField">
                        <center> <label className="FormField__Label" htmlFor="email">Contact No</label></center>
                        <center>  <input type="text" id="email" className="FormField__Input" placeholder="Contact Number" name="email" value={this.state.email} onChange={this.handleChange} /></center>
                    </div>
                    <div className="FormField">
                        <center> <label className="FormField__Label" htmlFor="email">Email</label></center>
                        <center> <input type="text" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} /></center>
                    </div>

                    <div className="FormField">
                        <center>   <label className="FormField__Label" htmlFor="email">Other Details</label></center>
                        <center>    <input type="text" id="email" className="FormField__Input" placeholder="Other " name="email" value={this.state.email} onChange={this.handleChange} /></center>
                    </div>

                    <div className="FormField">
                        <center>  <button className="FormField__Button mr-20">Submit</button></center>
                    </div>
                    </table>
                </form>
            </div>
        );
    }
}

export default AccommodationRegistration;