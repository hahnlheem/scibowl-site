import React, { Component } from "react";
import { Link } from "@reach/router";

import "../../utilities.css";
import "./Testy.css";

class Testy extends Component {
  constructor(props) {
    super(props);
    // Initialize Default State
    this.state = {};
  }

  componentDidMount() {
    // remember -- api calls go here!
  }
  timerInterval = null;
  countDown20() {
    document.getElementById("20sec").innerHTML = --value;
    if (value==0) {
      stop();
      document.getElementById("20sec").style.background="blue";
    }
  }
  stop() {
    clearInterval(timerInterval);
    document.getElementById("20sec").style.background="green";
  }
  start() {
    stop(); // stoping the previous counting (if any)
    value = 20;
    timerInterval = setInterval(countDown20, 1000);
  }

  render() {
    return (
      <>
      <Link to="/">hopefully this brings us to main page</Link>


      <h1 id="20sec">
        20
      </h1>
      <button onclick={this.start}>Start Bonus</button>
      <button onclick={this.stop}>Stop Bonus</button>
      </>
    );
  }
}

export default Testy;
