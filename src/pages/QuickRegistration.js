import React, { Component, setState } from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';
import { Redirect } from "react-router";

export default class QuickRegistration extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            birthday: ""
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
        const formData = this.state;
        // this.finallySubmit(formData);
        const result = await axios.get("http://localhost:5000/users?email=" + this.state.email);
        
        const obj = result.data;
        console.log(obj);
    
        if(Object.entries(obj).length === 0)
        {
            // axios.post("http://localhost:5000/users", formData);
            window.location.href = '/registration';
        }
        else
        {
            axios.put("http://localhost:5000/users?loggedIn=", "true")
            window.location.href = '/alreadyregistered';
        }
    }

    render(){
        return (
            <div className="App"> 
                <h3>Quick Registration</h3>
                <form onSubmit={this.handleSubmit}>
                    {/* <label for="email">Email:</label> */}
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="name@muster.de" 
                        value={this.state.email} 
                        onChange={this.handleChange} required
                        className="input-field">
                    </input>
                    <input 
                        type="text" 
                        name="birthday" 
                        placeholder="dd.mm.yyyy" 
                        value={this.state.birthday} 
                        onChange={this.handleChange} required
                        className="input-field">
                    </input>
                    <br></br>
                    <br></br>
                    <button type="submit" className="round-button">
                        >
                    </button>
                </form>
            </div>            
        )
    }
}

