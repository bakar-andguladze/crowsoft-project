import React, { Component, setState } from "react";
import { Link } from 'react-router-dom';
import "../App.css";

class Welcome extends Component {

  render() {
    return (
      <div className="App">
        <div className="xxx">
          <p className="welcome">WELCOME TO </p> 
          <p className="crowsoft">CROWSOFT!</p>
        </div>
        <br></br>
        <Link to="/QuickRegistration">
          <div className="link">Quick Registration</div>
        </Link>
      </div>
    )
  }

}
export default Welcome;
