import React, { Component } from "react";
import { Link } from "@reach/router";

class Clock extends Component {
    constructor(props) {
      super(props);
      this.state = {
          teamA: 0,
          teamB: 0,
      }
    }
  
    // componentDidMount() {
    //   this.timerID = 0;
    // }
  
    componentWillUnmount() {
      clearInterval(this.interval);
    }

  
    tick() {
        this.interval = setInterval(() => {
            if (this.state.n>0) {
                this.setState(prevState => ({
                    n: prevState.n-1
                }));
            }
            
        }, 1000);
    }
  
    render() {
      return (
        <div>
          <h1>YEET HAW</h1>
          <h2>THE TIME IS CURRENTLY {this.state.n}.</h2>
          <button onClick={this.tick}>Start Bonus</button>
          <button onClick={this.decreaseBy1}>Stop Bonus</button>
        </div>
      );
    }
  }
  
  export default Clock;