import React, { Component } from "react";
import { Link } from "@reach/router";

class Clock extends Component {
    constructor(props) {
      super(props);
      this.state = { 
        timeLeft: 20,
        paused: true,
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
            if (this.state.timeLeft > 0 && (this.state.paused)) {
                this.setState(prevState => ({
                    timeLeft: prevState.timeLeft-1
                }));
            }
            
        }, 1000);
    }

    negPause() {
      this.setState({
        paused: !(this.state.paused)
      } );
    }

    stopTimer = () => {
      clearInterval(this.state.timeLeft)
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
          <h2>Countdown:</h2>
          <div>
            <input type="text" onChange={ this.setSeconds } value={ this.state.timeLeft } />
          </div>
          <button onClick={this.tick} type="button" class="btn btn-primary">Start Bonus</button>
          <button onClick={this.stopTimer} type="button" class="btn btn-danger">Stop Bonus</button>
        </div>
      );
    }
  }
  
  export default Clock;