import React, { Component, useState } from 'react';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles'


import { Link } from "@reach/router";
import Editable from "../Editable.js";

import "./Input.css";
import Team from "./TeamTable/Team";
import Key from "./TeamTable/Key";

const useStyles = makeStyles({
	root: {
		
	}
})

class Input extends Component {
	constructor(props) {
		super(props);
		const responders = []
		this.props.allPlayers.forEach(function (item, index) {
			responders.push({
				id: index,
				name: item,
				state: "na",
			})
		})
		this.state = {
			subjects: ["Biology", "Chemistry", "Physics", "ESS", "Math", "Energy"],
			number: 1,
			type: "Bonus",
			subject: "Chemistry",
			responders: responders,
		}

	}

	resetAllPlayers = (team) => {
		var responders = []
		const players = this.props.teams.filter((selectedTeam) => selectedTeam.team === team)[0].players
		for (const id of players) {
			responders = this.state.responders.map((responder) => responder.id == id ? { ...responder, state: "na" } : responder)
		}
		this.setState({ responders: responders })
	}

	togglePlayerResponse = (id, currentState) => {
		var state = ""
		switch (currentState) {
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
		const responders = this.state.responders.map((responder) => responder.id === id ? { ...responder, state: state } : responder)
		this.setState({ responders: responders })
	};

	handleTypeChange = (event, newType) => {
		if (newType !== null) {
			this.setState({ type: newType })
		}
	};
	handleSubjectChange = (event, newSubject) => {
		if (newSubject !== null) {
			this.setState({ subject: newSubject })
		}
	}
	render() {

		return (
			<div>
				<form className='add-form'>
					<FormControlLabel labelPlacement='start' label="Question Type" control={
						<ToggleButtonGroup
						value={this.state.type}
						exclusive
						onChange={this.handleTypeChange}
					>

						<ToggleButton value="Toss-up" >
							Toss-up
						</ToggleButton>
						<ToggleButton value="Bonus" >
							Bonus
						</ToggleButton>
					</ToggleButtonGroup>
					} />
					<FormControlLabel labelPlacement='start' label="Subject" control={
						<ToggleButtonGroup
							value={this.state.subject}
							exclusive
							onChange={this.handleSubjectChange}
						>
							<ToggleButton value="Biology" >
								Biology
							</ToggleButton>
							<ToggleButton value="Chemistry" >
								Chemistry
							</ToggleButton>
							<ToggleButton value="Earth/Space" >
								Earth/Space
							</ToggleButton>
							<ToggleButton value="Energy" >
								Energy
							</ToggleButton>
							<ToggleButton value="Math" >
								Math
							</ToggleButton>
							<ToggleButton value="Physics" >
								Physics
							</ToggleButton>
						</ToggleButtonGroup>}
					/>
					<Key />
					<div>
						{this.props.teams.map((team) => (<Team team={team} key={team.team} responders={this.state.responders} togglePlayerResponse={this.togglePlayerResponse} resetAllPlayers={this.resetAllPlayers} />))};
					</div>
					<input type='submit' value='Save Question' className='btn btn-block' />
				</form>
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

