import React, { Component } from "react";
import { Link } from "@reach/router";

class Clock extends Component {
    constructor(props) {
      super(props);
      this.state = { 
        timeLeft: 20,
        isPaused: true,
        isStartPressed: false,
      };
      this.tick = this.tick.bind(this);
    }
  
    // componentDidMount() {
    //   this.timerID = 0;
    // }
  
    // componentWillUnmount() {
    //   clearInterval(this.interval);
    // }

  
    tick() {
      this.interval = setInterval(() => {
          if (this.state.timeLeft > 0 && !(this.state.isPaused)) {
              this.setState(prevState => ({
                  timeLeft: prevState.timeLeft-1
              }));
          }
          
      }, 1000);
    }

    pauseTimer = (e) => {
      this.setState(prevState => ({
        isPaused: true
      }));
    }

    startBonus = (e) => {
      this.setState({
        isPaused: false
      });
      if (!this.state.isStartPressed) {
        this.tick();
        this.setState({
          isStartPressed: true
        });
      } else{
        this.setState({
          isStartPressed: true
        });
      }
      
    }

    setSeconds = (e) => {
      this.setState({
        timeLeft: e.target.value
      });
    };
  
    render() {
      return (
        <div className="full-page">
          <h1>random text</h1>
          <h2>Countdown: { this.state.isPaused ? "test" : 20 }</h2>
          <div>
            <input type="text" onChange={ this.setSeconds } value={ this.state.timeLeft } />
          </div>
          <button onClick={this.startBonus} type="button" class="btn btn-primary">Start Bonus</button>
          <button onClick={this.pauseTimer} type="button" class="btn btn-danger">Stop Bonus</button>
        </div>
      );
    }
  }
  
  export default Clock;