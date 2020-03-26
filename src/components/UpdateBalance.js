import React from 'react'

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
        value={this.state.newBalance}
        onChange={(e) => this.balanceUpdateHandler(e)}
        ></input>
        <button 
        onClick={()  => {this.setState({newBalance: ''})
         this.props.updatebalance(this.props.id, this.state.newBalance)}}
        >Update Balance</button>
    </div>
}
}