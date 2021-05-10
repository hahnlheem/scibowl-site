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
            roster: ["hahn", "melissa", "alvin"],
            subjects: ["Biology", "Chemistry", "Physics", "ESS", "Math", "Energy"],
        }
    }

    handleQuestionChange = (e) => {
        this.setState({ questionType: e.target.value });
    };

    render() {
        return (
            <span className="full-page">
                
                <div class="float-container">
                    <p>Question Type: 
                        <select value={this.state.questionType} onChange={this.handleQuestionChange}>
                            <option value="Toss-up">Toss-up</option>
                            <option value="Bonus">Bonus</option>
                        </select>
                    </p>
                    <p>Subject: 
                        <select>{this.state.subjects.map(list => (<option key={list} value={list}>
                            {list}
                        </option>
                        ))}
                        </select>
                    </p>
                    <p>Responder: 
                        <select>{this.state.roster.map(list => (<option key={list} value={list}>
                            {list}
                        </option>
                        ))}
                        </select>
                    </p>
                </div>
            </span>
        )
    }
}

export default Input;

