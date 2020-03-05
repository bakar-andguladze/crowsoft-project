import React, { Component, setState } from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';
import { Redirect } from "react-router";

class Registration extends Component {

  constructor(props) {
    super(props);

    this.state = {
        gender: "",
        firstname: "",
        lastname: "",
        plz: "", 
        place: "",
        street: "",
        streetNumber: "",
        email: "",
        birthday: "",

        loggedIn: "false"
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
}

handleChange(event) {
    this.setState ({
        [event.target.name]: event.target.value
    }
    )
}

handleSubmit = async (event) => {
    event.preventDefault();
    this.state.loggedIn = "true";
    const formData = this.state;

    await axios.post("http://localhost:5000/users", formData);
    window.location.href = '/thanks';
}

  render(){
    return (
        <div className="App"> 
            <h3>Registration</h3>
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="radio"
                    id="male" 
                    name="gender"
                    value="Herr"
                    onChange={this.handleChange} required
                    className="radio-input">
                </input>
                <label for="male">Herr</label>
                <br></br>

                <input 
                    type="radio"
                    id="female" 
                    name="gender"
                    value="Frau"
                    onChange={this.handleChange} required
                    className="radio-input">
                </input>
                <label for="male">Frau</label>
                <br></br>

                <input 
                    type="text" 
                    name="firstname" 
                    placeholder="Firstname*" 
                    value={this.state.firstname} 
                    onChange={this.handleChange} required
                    className="input-field">
                </input>
                <br></br>

                <input 
                    type="text" 
                    name="lastname" 
                    placeholder="Lastname*" 
                    value={this.state.lastname} 
                    onChange={this.handleChange} required
                    className="input-field">
                </input>
                <br></br>

                <input 
                    type="text" 
                    name="plz" 
                    placeholder="PLZ*" 
                    value={this.state.plz} 
                    onChange={this.handleChange} required
                    className="input-field">
                </input>
                <br></br>

                <input 
                    type="text" 
                    name="place" 
                    placeholder="Town*" 
                    value={this.state.place} 
                    onChange={this.handleChange} required
                    className="input-field">
                </input>
                <br></br>

                <input 
                    type="text" 
                    name="street" 
                    placeholder="Street*" 
                    value={this.state.street} 
                    onChange={this.handleChange} required
                    className="input-field">
                </input>
                <br></br>

                <input 
                    type="text" 
                    name="streetNumber" 
                    placeholder="Street Nr.*" 
                    value={this.state.streetNumber} 
                    onChange={this.handleChange} required
                    className="input-field">
                </input>
                <br></br>

                <input 
                    type="email" 
                    name="email" 
                    placeholder="Email*" 
                    value={this.state.email} 
                    onChange={this.handleChange} required
                    className="input-field">
                </input>
                <br></br>

                <input 
                    type="text" 
                    name="birthday" 
                    placeholder="Birthday (dd.mm.yyyy)*" 
                    value={this.state.birthday} 
                    onChange={this.handleChange} required
                    className="input-field">
                </input>
                <br></br>
                <br></br>

                <button type="submit" className="round-button">
                    >
                </button>
                <br></br>

            </form>
        </div>            
    )
  } 
}
export default Registration;
