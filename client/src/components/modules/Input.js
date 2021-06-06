import React, { Component, useState } from 'react';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

import "./Input.css";
import Team from "./TeamTable/Team";
import Key from "./TeamTable/Key";

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
			number: this.props.questionNumber,
			type: "Bonus",
			subject: "Chemistry",
			responders: responders,
			root: {
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				padding: '0 30px',
			'& .MuiTextField-root': {
				  margin: '0 30px',
				  width: '300px',
				},
			'& .MuiButtonBase-root': {
				  margin: '0 30px',
				},
			  },
		}

	}

	resetAllPlayers = (team) => {
		var responders = []
		const players = this.props.teams.filter((selectedTeam) => selectedTeam.team === team)[0].players
		console.log(players)
		for (const id of players) {
			responders = this.state.responders.map((responder) => responder.id == id ? { ...responder, state: "na" } : responder)
		}
		this.setState({ responders: responders })
		console.log(responders)
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

	// updateScore = () => {
		
	// }

	render() {
		return (
			<div>
				<form className={this.state.root} onsubmit="return false">
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
					<Button type='submit' variant='contained' onClick={e => {
						e.preventDefault();
						
						if(this.state.type=="Toss-up") {
							this.setState({ number: parseInt(this.state.number) + 1 })
							this.props.incrementNumber()
							console.log(this.props.questionNumber)
						}

						const question = {
							"number": this.state.number,
							"type": this.state.type,
							"subject": this.state.subject,
							"responders": this.state.responders,
							"teamA": 18,
							"teamB": 4,
						}
						console.log(question)
					this.props.saveQuestion(question)
					this.resetAllPlayers("A")
					this.resetAllPlayers("B")
					console.log(this.props.questionNumber)
				}}>Save Question
					</Button> 
				</form>
			</div>
		);
	}
}

export default Input;

