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
			    responders: {
            "melissa": "ic",
            "bojack": "ii",
          },
          teamA: 0,
          teamB: 14,
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

  saveQuestion = (question) => {
    const questions = this.state.questions.push(question)
    this.setState({ questions: questions })
  }

  render() {
    
    return (
      <>
        <div className="main-div">
          <Clock />
          <Scoreboard />
          <Input teams={this.state.teams} allPlayers={this.state.allPlayers} saveQuestion={this.saveQuestion} />
          <Table questions={this.state.questions}/>
        </div>
      </>
    );
  }
}

export default Testy;
