import React, { Component } from "react";
import { Link } from "@reach/router";
import Clock from "../modules/Clock.js";
import Scoreboard from "../modules/Scoreboard.js";
import Input from "../modules/Input.js";

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
        <div className="main-div">

          <Clock/>
          <Scoreboard/>
          <Input/>
        </div>
      </>
    );
  }
}

export default Testy;
