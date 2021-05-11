import React, { Component } from "react";
import { Link } from "@reach/router";

import "./NavBar.css";

/**
 * The navigation bar at the top of all pages. Takes no props.
 */
class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="NavBar-container">
        <Link to="/" className="NavBar-title u-inlineBlock">Scibowl Site</Link>
        <div className="NavBar-linkContainer u-inlineBlock">
          {/* <Link to="/" className="NavBar-link">
            Home
          </Link> */}
          <Link to="/testy/" className="NavBar-link">
            Testy
          </Link>
          <Link to="/NewGame/" className="NavBar-link">
            New Game
          </Link>
          <Link to="/PastGames/" className="NavBar-link">
            Past Games
          </Link>
        </div>
      </nav>
    );
  }
}

export default NavBar;
