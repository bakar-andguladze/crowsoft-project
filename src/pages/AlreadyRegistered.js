import React, { Component, setState } from "react";
import { Link } from 'react-router-dom';

class AlreadyRegistered extends Component {


  render() {
    return (
      <div className="App">
        <div>
          <div className="thanks">SCHÖN, DICH <br></br>WIEDER ZU SEHEN!</div>
          <br></br>
          <br></br>
          <div className="thanks-b">Super, , <br></br>du bist schon dabei! </div>
        </div>

        <br></br>

        <button type="submit" className="round-button">
          >
        </button>
      </div>
    )
  }
}

export default AlreadyRegistered;
