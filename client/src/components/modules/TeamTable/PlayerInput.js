import React, { Component } from 'react'

export class PlayerInput extends Component {
    constructor(props) {
		super(props);		
	}
    render() {
        return (
            <div className={'player '+this.props.state} onClick={() => this.props.togglePlayerResponse(this.props.id, this.props.state)}>{this.props.name}</div>
        )
    }
}

export default PlayerInput
// onClick={() => this.props.togglePlayerResponse(this.props.name, "hey")}