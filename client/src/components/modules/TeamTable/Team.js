import React, { Component } from 'react';
import PlayerInput from "./PlayerInput";
import Key from "./Key";

export class Team extends Component {
    render() {
        return (
            <div>
                <div className='team-name'>{this.props.team.team}
                    </div>
                {this.props.team.players.map((player) => (<PlayerInput key={player} id={player} name={this.props.responders[player].name} state={this.props.responders[player].state} togglePlayerResponse={this.props.togglePlayerResponse} />))}
            </div>
        )
    }
}

export default Team

