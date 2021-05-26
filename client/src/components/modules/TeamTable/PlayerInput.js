import React, { Component } from 'react'

export class PlayerInput extends Component {
    constructor(props) {
		super(props);	
	}
    render() {
        
        return (
            <div className={'player '+this.props.state} 
                onClick={() => {
                    if(this.props.team == "A") {
                        this.props.resetAllPlayers(this.props.team)
                        this.props.rerenderTable()
                        console.log(this.props.state)
                    }
                    this.props.togglePlayerResponse(this.props.id, this.props.state)                    
                }
            }>{this.props.name}</div>
        )
    }
}

export default PlayerInput
// onClick={() => this.props.togglePlayerResponse(this.props.name, "hey")}