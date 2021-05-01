import React, { Component } from "react";
import { Link } from "@reach/router";

import "../../utilities.css";
import "./Testy.css";

class Testy extends Component {
  constructor(props) {
    super(props);
    // Initialize Default State
    this.state = {
      numSeconds: 20,
    };
  }

  componentDidMount() {
    // remember -- api calls go here!
  }
  // timerInterval = null;
  // countDown20() {
  //   document.getElementById("20sec").innerHTML = --value;
  //   if (value==0) {
  //     stop();
  //     document.getElementById("20sec").style.background="blue";
  //   }
  // }
  // stop() {
  //   clearInterval(timerInterval);
  //   document.getElementById("20sec").style.background="green";
  // }
  // start() {
  //   stop(); // stoping the previous counting (if any)
  //   value = 20;
  //   timerInterval = setInterval(countDown20, 1000);
  // }
  increaseBy1 = () => {
    this.setState({
      numSeconds : this.state.numSeconds + 1
    })
  }

  decreaseBy1 = () => {
    this.setState({
      numSeconds : this.state.numSeconds - 1
    })
  }

  render() {
    return (
      <>
      <Link to="/">hopefully this brings us to main page</Link>


      <h1 id="20sec">
        {this.state.numSeconds}
      </h1>
      <button onClick={this.increaseBy1}>Start Bonus</button>
      <button onClick={this.decreaseBy1}>Stop Bonus</button>
      </>
    );
  }
}

export default Testy;
