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
            correct: True,
            responder: "",
        }
    }

    render() {
        return (
            <span className="full-page">
                <div class="float-container">
                    
                </div>
            </span>
        )
    }
}