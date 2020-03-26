import React from "react";
import Cleave from 'cleave.js/react';


export default class SubmitCard extends React.Component {
  constructor() {
    super();
    this.state = {
      newCardNumber: "",
      newCardBalance: ""
    };
    this.numChangeHandler = this.numChangeHandler.bind(this)
  }

  numChangeHandler(e) {
      this.setState({
          newCardNumber: e.target.value
      })
  }
  balChangeHandler(e) {
    this.setState({
        newCardBalance: e.target.value
    })
}



  render() {
    
    return(
      <div>
        
            <Cleave 
              options={{creditCard: true}}
              name='newCardNum'
              value={this.state.newCardNumber}
              onChange={(e) => this.numChangeHandler(e)}
              placeholder='Card Number'
              size="40"
            />            
            <input 
                type='number' 
                name='newCardBal'
                value={this.state.newCardBalance}
                onChange={(e) => this.balChangeHandler(e)}
                placeholder='Card Balance'
            />
            <button 
            onClick={() => {this.setState({newCardNumber: '', newCardBalance: ''})
              this.props.addCard(this.state.newCardNumber, this.state.newCardBalance)}}
            >Add Card</button>
        </div>
    )

  }
}
