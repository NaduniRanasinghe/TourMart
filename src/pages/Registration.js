import React, { Component } from 'react';

class Registration extends Component {

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
            otherDetails:'',
            male:true,
            female:true,
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
                        <label className="FormField__Label" htmlFor="password32">Address</label>
                        <input type="password1" id="password1" className="FormField__Input" placeholder="Enter Address" name="name" value={this.state.address} onChange={this.handleChange} />
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="password43">Licence ID</label>
                        <input type="password2" id="password" className="FormField__Input" placeholder="Enter Licence ID" name="licenceID" value={this.state.address} onChange={this.handleChange} />
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="email4">Working Area</label>
                        <input type="email4" id="email" className="FormField__Input" placeholder="Enter working area" name="email" value={this.state.email} onChange={this.handleChange} />
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="email1">Languages</label>
                        <input type="email23" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="email33">Gender</label>
                        <input className="FormField__Checkbox" type="checkbox" name="female" value={this.state.female} onChange={this.handleChange} />male
                        <input className="FormField__Checkbox" type="checkbox" name="male" value={this.state.male} onChange={this.handleChange} />female
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="email2">Contact No</label>
                        <input type="email" id="email1" className="FormField__Input" placeholder="Enter your contact Number" name="email" value={this.state.contactNo} onChange={this.handleChange} />
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="email1">Email</label>
                        <input type="email" id="email2" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
                    </div>

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="email">Other Details</label>
                        <input type="email" id="email3" className="FormField__Input" placeholder="Enter other details" name="email" value={this.state.otherDetails} onChange={this.handleChange} />
                    </div>

                    <div className="FormField">
                        <button className="FormField__Button mr-20">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Registration;

