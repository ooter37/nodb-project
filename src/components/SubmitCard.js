import React from "react";


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
            <input 
                type='number' 
                name='newCardNum'
                value={this.newCardNumber}
                onChange={(e) => this.numChangeHandler(e)}
                placeholder='Card Number'
            />
            <input 
                type='number' 
                name='newCardBal'
                value={this.newCardBalance}
                onChange={(e) => this.balChangeHandler(e)}
                placeholder='Card Balance'
            />
            <button 
            onClick={() => this.props.addCard(this.state.newCardNumber, this.state.newCardBalance)}
            >Add Card</button>
        </div>
    )

  }
}