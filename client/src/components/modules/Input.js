import React, { Component, useState } from "react";
import { Link } from "@reach/router";
import Editable from "../Editable.js";

import "./Input.css";

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questionType: "",
            subject: "",
            correct: true,
            responder: "",
        }
    }

    changeToTossup = (e) => {
        this.setState({
            questionType : "Tossup"
          });
    }

    changeToBonus = (e) => {
        this.setState({
            questionType : "Bonus"
          });
    }

    render() {
        return (
            <span className="full-page">
                <div class="float-container">
                    <h2>Question Type: {this.state.questionType}</h2>
                    <div class="dropdown">
                        <button class="dropbtn">Question Type</button>
                        <div class="dropdown-content">
                            <button onClick={this.changeToTossup} type="button">Toss-up</button>
                            <button onClick={this.changeToBonus} type="button">Bonus</button>
                        </div>
                    </div>
                </div>
            </span>
        )
    }
}

export default Input;

