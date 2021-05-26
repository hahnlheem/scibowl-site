import React, { Component } from 'react';
import PlayerInput from "./PlayerInput";
import Key from "./Key";

export class Team extends Component {
    constructor(props) {
        super(props)
        this.rerenderTable = this.rerenderTable.bind(this)
    }
    rerenderTable = () => {
        this.forceUpdate()
    }
    render() {
        
        return (
            <div>
                <div className='team-name'>{this.props.team.team}
                    </div>
                {this.props.team.players.map((player) => (<PlayerInput key={player} id={player} name={this.props.responders[player].name} state={this.props.responders[player].state} team={this.props.team.team} togglePlayerResponse={this.props.togglePlayerResponse} resetAllPlayers={this.props.resetAllPlayers} rerenderTable={this.rerenderTable}/>))}
            </div>
        )
    }
}

export default Team

