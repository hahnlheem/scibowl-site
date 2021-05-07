import React, { Component } from "react";
import { Link } from "@reach/router";
import Clock from "../modules/Clock.js";
import Scoreboard from "../modules/Scoreboard.js";
import NavBar from "../modules/NavBar.js";

import "../../utilities.css";
import "./Testy.css";

class Testy extends Component {
  constructor(props) {
    super(props);
    // Initialize Default State
    // this.state = {
    //   numPoints: 0,
    // };
  }

  componentDidMount() {
    // remember -- api calls go here!
  }
  
  

  render() {
    return (
      <>
        {/* <NavBar /> */}
        <div className="main-div">

          <Clock/>
          <Scoreboard/>
        </div>
      </>
    );
  }
}

export default Testy;
