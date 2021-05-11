import React, { Component, useState } from "react";
import { Link } from "@reach/router";

import "./Table.css";

export class Table extends Component {
    constructor(props) {
      super(props);
    //   this.state = {
    //       teamA: 0,
    //       teamB: 0,
    //   }
    }
  
    // componentDidMount() {
    //   this.timerID = 0;
    // }
  
    componentWillUnmount() {
      // clearInterval(this.interval);
    }


    render() {
      return (
        <div>
            <h2>This is where the table is going  to be but i'm lazee right now</h2>
            <table className="table">
                {/* Help i have no clue how to format a table */}
                <tr>
                    <th>Problem Number</th>
                    <th>Subject</th>
                    <th>Team A Score</th>
                    <th>Team B Score</th>
                </tr>
                <tr>
                    <td>u</td>
                    <td>w</td>
                    <td>u</td>
                    <td>{this.props.packet}</td>
                </tr>
            </table>
            
        </div>
      );
    }
  }
  
  export default Table;