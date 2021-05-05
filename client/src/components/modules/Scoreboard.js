import React, { Component, useState } from "react";
import { Link } from "@reach/router";
import Editable from "../Editable"

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
        teamA : this.state.teamA + 4
      })
    }
  
    decreaseBy4A = () => {
      this.setState({
        teamA : this.state.teamA - 4
      })
    }
    increaseBy10A = () => {
      this.setState({
        teamA : this.state.teamA + 10
      })
    }
  
    decreaseBy10A = () => {
      this.setState({
        teamA : this.state.teamA - 10
      })
    }
    increaseBy4B = () => {
      this.setState({
        teamB : this.state.teamB + 4
      })
    }
  
    decreaseBy4B = () => {
      this.setState({
        teamB : this.state.teamB - 4
      })
    }
    increaseBy10B = () => {
      this.setState({
        teamB : this.state.teamB + 10
      })
    }
  
    decreaseBy10B = () => {
      this.setState({
        teamB : this.state.teamB - 10
      })
    }
    resetA = () => {
      this.setState({
        teamA : 0
      })
    }
    resetB = () => {
      this.setState({
        teamB : 0
      })
    }
    resetScores = () => {
      this.setState({
        teamA : 0,
        teamB : 0
      })
    }


    render() {
      return (
        <div class = "container">
          <h2>Team A Score: {this.state.teamA}</h2>
          <button onClick={this.increaseBy4A} type="button" class="btn btn-primary">+4</button>
          <button onClick={this.decreaseBy4A} type="button" class="btn btn-primary">-4</button>
          <button onClick={this.increaseBy10A} type="button" class="btn btn-primary">+10</button>
          <button onClick={this.decreaseBy10A} type="button" class="btn btn-primary">-10</button>
          {/* <button onClick={this.resetA} type="button" class="btn btn-warning">Reset Team A</button> */}
          <h2>Team B Score: {this.state.teamB}</h2>
          <button onClick={this.increaseBy4B} type="button" class="btn btn-primary">+4</button>
          <button onClick={this.decreaseBy4B} type="button" class="btn btn-primary">-4</button>
          <button onClick={this.increaseBy10B} type="button" class="btn btn-primary">+10</button>
          <button onClick={this.decreaseBy10B} type="button" class="btn btn-primary">-10</button>
          {/* <button onClick={this.resetB} type="button" class="btn btn-warning">Reset Team B</button> */}
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
        </div>
        
      );
    }
  }
  
  export default Scoreboard;