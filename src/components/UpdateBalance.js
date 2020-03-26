import React from 'react'
import e from 'express'

export default class UpdateBalance extends React.Component {
    constructor() {
        super()
        this.state = {
            newBalance: ''
        }
        this.balanceUpdateHandler = this.balanceUpdateHandler.bind(this)
    }
    
    balanceUpdateHandler(e) {
        this.setState({
            newBalance: e.target.value
        })
    }
    
    render() {
    return <div>
        <input
        type='number'
        name='newBalance'
        value={this.newBalance}
        onChange={(e) => this.balanceUpdateHandler(e)}
        ></input>
        <button 
        onClick={()  => this.props.updateBalance(this.state.newBalance)}
        >Update Balance</button>
    </div>
}
}