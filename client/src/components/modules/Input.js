import React, { Component, useState } from 'react';

import { Link } from "@reach/router";
import Editable from "../Editable.js";

import "./Input.css";
import Team from "./TeamTable/Team";
import Key from "./TeamTable/Key";

class Input extends Component {
	constructor(props) {
		super(props);
		const responders = []
		for (var i = 0; i < this.props.allPlayers.length; i++) {
			responders.push({
				id: i,
				name: this.props.allPlayers[i],
				state: "na",
			})
		};
		this.state = {
			subjects: ["Biology", "Chemistry", "Physics", "ESS", "Math", "Energy"],
			number: 1,
			type: "Bonus",
			subject: "Chemistry",
			responders: responders,
		}
		
	}

	togglePlayerResponse = (id, currentState) => {
		var state = ""
		switch(currentState) {
			case "na": 
				state = "c";
				break;
			case "c":
				state = "i";
				break;
			case "i":
				state = "ic";
				break;
			case "ic":
				state = "ii";
				break;
			case "ii":
				state = "na";
				break;
		}
		const responders = this.state.responders.map((responder) => responder.id === id ? { ...responder, state: state} : responder)
	    this.setState({ responders: responders })
	};

	handleQuestionChange = (e) => {
		this.setState({ questionType: e.target.value });
	};

	render() {
		
		return (
			<div>
				<Key />
				<div>
					{this.props.teams.map((team) => (<Team team={team} key={team.team} responders={this.state.responders} togglePlayerResponse={this.togglePlayerResponse}/>))};
				</div>
			</div>
		);


		// <form className='add-form' onSubmit={onSubmit}>
		// 	<p>Question Type:
		// 			<select value={this.state.questionType} onChange={this.handleQuestionChange} className="dropdown">
		// 			<option value="Toss-up">Toss-up</option>
		// 			<option value="Bonus">Bonus</option>
		// 		</select>
		// 	</p>
		// 	<p>Subject:
		// 			<select className="dropdown">{this.state.subjects.map(list => (
		// 		<option key={list} value={list}>
		// 			{list}
		// 		</option>
		// 	))}
		// 		</select>
		// 	</p>
		// </form>
	}
}

export default Input;

