import React from "react";
import Cleave from "cleave.js/react";

export default class SubmitCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newCardNumber: "",
      newCardBalance: 0
    };
    this.numChangeHandler = this.numChangeHandler.bind(this);
    this.balChangeHandler = this.balChangeHandler.bind(this);
  }

  numChangeHandler(e) {
    this.setState({
      newCardNumber: e.target.value
    });
  }
  balChangeHandler(e) {
    this.setState({
      newCardBalance: e.target.value
    });
  }

  render() {
    return (
      <div>
        <Cleave
          options={{ creditCard: true }}
          name="newCardNum"
          value={this.state.newCardNumber}
          onChange={e => this.numChangeHandler(e)}
          placeholder="Card Number"
          size="40"
        />
        <input
          list="balance-options"
          name="newCardBal"
          value={this.state.newCardBalance}
          onChange={e => this.balChangeHandler(e)}
          placeholder="Card Balance"
        />
        <datalist id="balance-options">
          {/* <option value={'$'+`${(5000).toLocaleString("en-US")}`}/> 
          <option data-value={10000} value='$10,000'></option>
          <option value={20000}>$20,000</option> */}

          <option value="$5,000" />
          <option value="$10,000" />
          <option value="$20,000" />
          <option value="$30,000" />
          <option value="$40,000" />
          <option value="$50,000" />
          <option value="$100,000" />
        </datalist>
        <button
          onClick={() => {
            this.setState({ newCardNumber: "", newCardBalance: 0 });
            if (this.state.newCardBalance) {
              this.props.addCard(
                this.state.newCardNumber,
                parseInt(this.state.newCardBalance.replace(/[$,]+/g, ""))
              );
            }
          }}
        >
          Add Card
        </button>
      </div>
    );
  }
}
