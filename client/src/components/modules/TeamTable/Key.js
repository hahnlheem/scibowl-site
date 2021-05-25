import React, { Component } from 'react'

export class Key extends Component {
    render() {
        return (
            <div className='key'>
                <div className='player'>No Answer</div>
                <div className='player c'>Correct</div>
                <div className='player i'>Incorrect</div>
                <div className='player ic'>Interrupt Correct</div>
                <div className='player ii'>Interrupt Incorrect</div>
            </div>
        )
    }
}

export default Key
