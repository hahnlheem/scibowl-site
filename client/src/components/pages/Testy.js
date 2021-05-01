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

  render() {
    return (
      <Link to="/">hopefully this brings us to main page</Link>
    );
  }
}

export default Testy;
