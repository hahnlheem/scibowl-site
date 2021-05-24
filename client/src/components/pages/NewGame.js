import React, { Component } from "react";
import { Link } from "@reach/router";

import "../../utilities.css";
import "./Testy.css";
import Table from "../modules/Table.js";


export class NewGame extends Component {
  constructor(props) {
    super(props);
    // Initialize Default State
    this.state = {
      timeTossup: 5,
      timeBonus: 20,
      packetLink: ""
    };
  }

  componentDidMount() {
    // remember -- api calls go here!
  }

  setPacket = (e) => {
      this.setState({
          packetLink: e.target.value
      });
  };
  setTossup = (e) => {
    this.setState({
      timeTossup: e.target.value
    });
  };
  setBonus = (e) => {
    this.setState({
      timeBonus: e.target.value
    });
  };

  render() {

    return (
      <>
        <Table packet={ this.state.packetLink }></Table>
        <form>
            <h1>Starting a new game! Please put your desired settings</h1>
            <label>Packet:<input onChange={ this.setPacket } value={ this.state.packetLink }></input></label> {/* optional, just stores some text */}
            <br />
            <label>Tossup Time: <input type="number" onChange={ this.setTossup } value={ this.state.timeTossup } /></label> 
            {/* default 5 */}
            <br />
            <label>Bonus Time: <input type="number" onChange={ this.setBonus } value={ this.state.timeBonus } /></label>
            {/* default 10 */}
            <br />
            <label>Game Clock Time:</label>
            {/* default 16, though this one doesn't matter because it can be manually edited */}
            <br />
            <label>Teams or free-for all:</label>
            {/* Should we include setting for >2 teams? */}
            <br />
            <label>Roster: </label>
            {/* As you input names, if it is teams, assign people to team A or team B */}
            <br />
            <label>Other notes: </label>
            <br />
            <button>Start my game!</button>
        </form>
        
      </>
    );
  }
}

export default NewGame;
