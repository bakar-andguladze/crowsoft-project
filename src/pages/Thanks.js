import React, { Component, setState } from "react";
import axios from "axios";
import "../App.css";

class Thanks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      loggedIn: "true"
    }
    this.handleClick = this.handleClick.bind(this);
    this.fetchName = this.fetchName.bind(this);

    this.setState();
  } 

  componentDidMount() {
    this.fetchName();
  }
  
  fetchName = async () => {
    const result = await axios.get("http://localhost:5000/users?loggedIn=true");
    // console.log(result.data[0]);
    const obj = result.data[0];
    try {
      this.setState({...this.state, firstname: obj.firstname});
    }
    catch {
      this.setState({...this.state, firstname: "guest"});
    }
    
  }

  handleClick = async (event) => {
    event.preventDefault();
    const result = await axios.get("http://localhost:5000/users?loggedIn=true");
    const obj = result.data;
    console.log(obj.length);
    console.log(obj[0]);
    const id = obj[0].id;
    axios.patch("http://localhost:5000/users/"+id, {
      loggedIn: "false"
    }).then(window.location.href = '/welcome');
  }

  
  render() {
    return (
      <div className="App">
        <div>
          <div className="thanks-b">Super, {(this.state.firstname)}, <br></br>du hast es geschafft! </div>
        </div>

        <br></br>

        <button type="submit" className="round-button" onClick={this.handleClick}> 
          >
        </button>
      </div>
    )
  }
}
export default Thanks;
