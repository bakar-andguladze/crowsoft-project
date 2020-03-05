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
    console.log(result.data[0]);
    const obj = result.data[0];
    this.setState({...this.state, firstname: obj.firstname});
  }

  handleClick = async (event) => {
    console.log(this.fetchName()).then(console.log("amis dedas sheveci"));
    event.preventDefault();
    const result = await axios.get("http://localhost:5000/users?loggedIn=true");
    const obj = result.data;
    axios.delete("http://localhost:5000/users?id=" + Object.entries(obj)[0].id);
    obj.loggedIn = "false";
    axios.post("http://localhost:5000/users", obj);
    // .then(window.location.href = '/welcome');
  }

  
  render() {
    return (
      <div className="App">
        <div>
          <div className="thanks-b">Super, {(this.state.firstname)}, <br></br>du hast es geschafft! </div>
        </div>

        <br></br>

        <button type="submit" className="round-button">
          >
        </button>
      </div>
    )
  }
}
export default Thanks;
