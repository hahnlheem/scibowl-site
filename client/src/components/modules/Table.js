import React, { Component, useState } from "react";
import { Link } from "@reach/router";

import "./Table.css";

export class Table extends Component {
    constructor(props) {
      super(props);
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
            <table id="scoreTable" className="table">
                {/* Help i have no clue how to format a table */}
                <tbody>
                  <tr>
                      <th>Problem Number</th>
                      <th>Subject</th>
                      <th>Team A Score</th>
                      <th>Team B Score</th>
                  </tr>
                  {this.props.populateTable()}
                </tbody>  
            </table>
        </div>
      );
    }
  }
  
  export default Table;