import React, { Component } from "react";
import { Link } from "@reach/router";
import Clock from "../modules/Clock.js";
import Scoreboard from "../modules/Scoreboard.js";
import Input from "../modules/Input.js";
import Table from "../modules/Table.js";

import "../../utilities.css";
import "./Testy.css";

class Testy extends Component {
  constructor(props) {
    super(props);
    // Initialize Default State
    this.state = {
      questions: [
        {
          number: 1,
          type: "Bonus",
          subject: "Chemistry",
			    correct: true,
			    responders: {
            "melissa": "ic",
            "bojack": "ii",
          },
        },
      ],
			teams: [
        {
          team: "A",
          players: [0, 1, 2],
          points: 0,
        },
        {
          team: "B",
          players: [3, 4],
          points: 14,
        },
      ],
      allPlayers: ["hahn", "melissa", "alvin", "bojack", "princess carolyn"],
    };
  }

  componentDidMount() {
    // remember -- api calls go here!
  }

  render() {
    
    return (
      <>
        <div className="main-div">
          <Clock />
          <Scoreboard />
          <Input teams={this.state.teams} allPlayers={this.state.allPlayers}/>
          <Table />
        </div>
      </>
    );
  }
}

export default Testy;
