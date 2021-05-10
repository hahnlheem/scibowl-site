import React, { Component } from "react";
import { Link } from "@reach/router";

class Clock extends Component {
    constructor(props) {
      super(props);
      this.state = { 
        timeLeft: 0,
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

    negPause = (e) => {
      this.setState(prevState => ({
        isPaused: !(this.state.isPaused)
      }));
    }

    startBonus = (e) => {
      this.setState({
        isPaused: false,
        timeLeft: 20
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

    startTossup = (e) => {
      this.setState({
        isPaused: false,
        timeLeft: 5
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
          <h2>Countdown:</h2>
          <div>
            <input type="text" onChange={ this.setSeconds } value={ this.state.timeLeft } />
          </div>
          <button onClick={this.startTossup} type="button" class="btn btn-primary">Start Tossup</button>
          <button onClick={this.startBonus} type="button" class="btn btn-danger">Start Bonus</button>
          <button onClick={this.negPause} type="button" class="btn btn-warning">Pause/Play</button>
        </div>
      );
    }
  }
  
  export default Clock;