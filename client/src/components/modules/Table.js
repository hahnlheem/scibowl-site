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

    populateTable = () => {
      return this.props.questions.map((question) => {
        const { number, subject, teamA, teamB } = question
        return (
          <tr id={number}>
            <td>{number}</td>
            <td>{subject}</td>
            <td>{teamA}</td>
            <td>{teamB}</td>
          </tr>
        )
      })
    }



    render() {
      return (
        <div>
            <h2>This is where the table is going  to be but i'm lazee right now</h2>
            <table id="scoreTable" className="table">
                {/* Help i have no clue how to format a table */}
                <tbody>
                  <tr>
                      <th>Problem Number</th>
                      <th>Subject</th>
                      <th>Team A Score</th>
                      <th>Team B Score</th>
                  </tr>
                  {this.populateTable()}
                </tbody>  
            </table>
            
        </div>
      );
    }
  }
  
  export default Table;