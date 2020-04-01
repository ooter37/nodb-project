import React from "react";
import Cleave from "cleave.js/react";

export default class CheckCard extends React.Component {
  constructor() {
    super();
    this.state = {
      cardNumber: ""
    };
  }

  numChangeHandler(e) {
    this.setState({
      cardNumber: e.target.value
    });
  }

  render() {
    return (
      <div>
        <Cleave
          options={{ creditCard: true }}
          name="checkCard"
          value={this.state.cardNumber}
          onChange={e => this.numChangeHandler(e)}
          placeholder="Card Number"
          size="40"
        />
        <button
          onClick={() => {
              this.setState({cardNumber: ''})
            this.props.checkcard(this.state.cardNumber);
          }}
        >
          Check Card
        </button>
      </div>
    );
  }
}
