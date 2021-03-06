import React, { Component, useState } from "react";
import { Link } from "@reach/router";
import Editable from "../Editable.js";

import "./Scoreboard.css";

class Scoreboard extends Component {
    constructor(props) {
      super(props);
      this.state = {
          teamA: 0,
          teamB: 0,
      }
      // this.task = useState("");
      // this.setTask = useState("");
    }
  
    // componentDidMount() {
    //   this.timerID = 0;
    // }
  
    componentWillUnmount() {
      // clearInterval(this.interval);
    }

  
    // tick() {
    //     this.interval = setInterval(() => {
    //         if (this.state.n>0) {
    //             this.setState(prevState => ({
    //                 n: prevState.n-1
    //             }));
    //         }
            
    //     }, 1000);
    // }
    increaseBy4A = () => {
      this.setState({
        teamA : parseInt(this.state.teamA) + 4
      })
    }
  
    decreaseBy4A = () => {
      this.setState({
        teamA : parseInt(this.state.teamA) - 4
      })
    }
    increaseBy10A = () => {
      this.setState({
        teamA : parseInt(this.state.teamA) + 10
      })
    }
  
    decreaseBy10A = () => {
      this.setState({
        teamA : parseInt(this.state.teamA) - 10
      })
    }
    increaseBy4B = () => {
      this.setState({
        teamB : parseInt(this.state.teamB) + 4
      })
    }
  
    decreaseBy4B = () => {
      this.setState({
        teamB : parseInt(this.state.teamB) - 4
      })
    }
    increaseBy10B = () => {
      this.setState({
        teamB : parseInt(this.state.teamB) + 10
      })
    }
  
    decreaseBy10B = () => {
      this.setState({
        teamB : parseInt(this.state.teamB) - 10
      })
    }
    resetScores = () => {
      this.setState({
        teamA : 0,
        teamB : 0
      })
    }
    setTeamA = (e) => {
      this.setState({
        teamA: e.target.value
      });
    };
    setTeamB = (e) => {
      this.setState({
        teamB: e.target.value
      });
    };


    render() {
      return (
        <span className="full-page">
          <div className="float-container">
            <div className="float-child">
              <h2>Team A Score: <input type="number" onChange={ this.setTeamA } value={ this.state.teamA } className="scorebox"/></h2>
              <div className="u-inlineBlock center">
                  <button onClick={this.increaseBy4A} type="button" class="btn btn-primary score-button">+4</button>
                  <button onClick={this.decreaseBy4A} type="button" class="btn btn-primary score-button">-4</button>
                  <button onClick={this.increaseBy10A} type="button" class="btn btn-primary score-button">+10</button>
                  <button onClick={this.decreaseBy10A} type="button" class="btn btn-primary score-button">-10</button>
              </div>
            </div> 
            <div className="float-child">
              <h2>Team B Score: <input type="number" onChange={ this.setTeamB } value={ this.state.teamB } className="scorebox"/></h2>
              <div className="center">
                <button onClick={this.increaseBy4B} type="button" class="btn btn-primary score-button">+4</button>
                <button onClick={this.decreaseBy4B} type="button" class="btn btn-primary score-button">-4</button>
                <button onClick={this.increaseBy10B} type="button" class="btn btn-primary score-button">+10</button>
                <button onClick={this.decreaseBy10B} type="button" class="btn btn-primary score-button">-10</button>
              </div>
            </div>
          </div>
          <br>
          </br>
          <button onClick={this.resetScores} type="button" class="btn btn-warning">Reset Scores</button>
          {/* <Editable
            text={this.task}
            placeholder="Write a task name"
            type="input"
          >
            <input
              type="text"
              name="task"
              placeholder="Write a task name"
              value={this.task}
              onChange={e => this.setTask(e.target.value)}
            />
          </Editable> */}
        </span>
        
      );
    }
  }
  
  export default Scoreboard;