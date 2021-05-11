import React, { Component } from "react";
import { Link } from "@reach/router";

import "./Clock.css";

class Clock extends Component {
    constructor(props) {
      super(props);
      this.state = { 
        questionTime: 0,
        halfTime: 480,
        isHPaused: true,
        isQPaused: true,
        isHStartPressed: false,
        isQStartPressed: false,
      };
    }
  
    // componentDidMount() {
    //   this.timerID = 0;
    // }
  
    // componentWillUnmount() {
    //   clearInterval(this.interval);
    // }
    tickH = () => {
      this.interval = setInterval(() => {
          if (this.state.halfTime > 0 && !(this.state.isHPaused)) {
              this.setState(prevState => ({
                  halfTime: parseInt(prevState.halfTime)-1
              }));
          }
          
      }, 1000);
    }
    //currently it seems like tickH and tickQ use same interval? not that big of deal but,,,
    tickQ = () => {
      this.interval = setInterval(() => {
          if (this.state.questionTime > 0 && !(this.state.isQPaused)) {
              this.setState(prevState => ({
                  questionTime: parseInt(prevState.questionTime)-1
              }));
          }
          
      }, 1000);
    }

    negQPause = (e) => {
      this.setState(prevState => ({
        isQPaused: !(this.state.isQPaused)
      }));
    }

    negHPause = (e) => {
      this.setState(prevState => ({
        isHPaused: !(this.state.isHPaused)
      }));
    }

    startBonus = (e) => {
      this.setState({
        isQPaused: false,
        questionTime: 20
      });
      if (!this.state.isQStartPressed) {
        this.tickQ();
      }
      this.setState({
        isQStartPressed: true
      });
    }

    startTossup = (e) => {
      this.setState({
        isQPaused: false,
        questionTime: 5
      });
      if (!this.state.isQStartPressed) {
        this.tickQ();
      }
      this.setState({
        isQStartPressed: true
      });
    }

    startHalf = (e) => {
      this.setState({
        isHPaused: false,
        halfTime: 480
      });
      if (!this.state.isHStartPressed) {
        this.tickH();
      }
      this.setState({
        isHStartPressed: true
      });
    }

    resetHalf = (e) => {
      this.setState({
        isHPaused: true,
        halfTime: 480, // replace this with props once we get game settings going
      });
    }

    setHalfTime = (e) => { // split by :, need to fix this
      // might be some problem with defining halfTimeSecond in render()
      this.setState({
        halfTime: e.target.value
      });
    }

    setQSeconds = (e) => {
      this.setState({
        questionTime: e.target.value
      });
    }
  
    render() {
      let halfTimeSecond = (this.state.halfTime % 60 > 9) ? (this.state.halfTime % 60) : ("0" + this.state.halfTime % 60);
      let isQZero = this.state.isQStartPressed && this.state.questionTime === 0;
      return (
        <div className="full-page">
          <h1>random text</h1>
          <div className="float-container">
            {/* make these float childs a bit more flexible */}
            <div className="float-child">
              <h2>Half Timer: 
                <input type="text" 
                  onChange={ this.setHalfTime } 
                  value={ Math.floor(this.state.halfTime/60) + ":" + halfTimeSecond } 
                  className="halfClock"
                />
              </h2>
              <button onClick={this.startHalf} type="button" class="btn btn-primary">Start Half</button>
              <button onClick={this.negHPause} type="button" class="btn btn-warning">Pause/Play</button>
              <button onClick={this.resetHalf} type="button" class="btn btn-danger">Reset</button>
            </div>
            <div className="float-child">
              <h2>Question Timer: 
                <input type="number" 
                  onChange={ this.setQSeconds } 
                  value={ this.state.questionTime } 
                  className={ isQZero ? "questionClockAtZero" : "questionClock" }
                />
              </h2>
              <button onClick={this.startTossup} type="button" class="btn btn-primary">Start Tossup</button>
              <button onClick={this.startBonus} type="button" class="btn btn-danger">Start Bonus</button>
              <button onClick={this.negQPause} type="button" class="btn btn-warning">Pause/Play</button>
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default Clock;