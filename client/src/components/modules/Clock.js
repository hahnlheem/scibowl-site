import React, { Component } from "react";
import { Link } from "@reach/router";

class Clock extends Component {
    constructor(props) {
      super(props);
      this.state = { n: 20 };
      this.tick = this.tick.bind(this);
    }
  
    // componentDidMount() {
    //   this.timerID = 0;
    // }
  
    componentWillUnmount() {
      clearInterval(this.interval);
    }

  
    tick() {
        this.state.n = 20;
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
        <div className="full-page">
          <h1>random text</h1>
          <h2>Countdown: {this.state.n}.</h2>
          <button onClick={this.tick} type="button" class="btn btn-primary">Start Bonus</button>
          <button onClick={this.decreaseBy1} type="button" class="btn btn-danger">Stop Bonus</button>
        </div>
      );
    }
  }
  
  export default Clock;