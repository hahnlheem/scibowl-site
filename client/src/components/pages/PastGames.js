import React, { Component } from "react";
import { Link } from "@reach/router";

import "../../utilities.css";
import "./Testy.css";

class PastGames extends Component {
  constructor(props) {
    super(props);
    // Initialize Default State
    // this.state = {
    //   
    // };
  }

  componentDidMount() {
    // remember -- api calls go here!
  }

  render() {
    return (
      <>
        <span className="full-page">
            <h1>Here we'll make a table that stores past games.</h1>
        </span>
      </>
    );
  }
}

export default PastGames;
