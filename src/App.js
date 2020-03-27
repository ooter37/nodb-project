import React from "react";
import axios from "axios";
import SubmitCard from "./components/SubmitCard.js";
import ListCards from "./components/ListCards";
import Progress from './components/Progress'
import "./App.css";
import "./reset.css";
import background from './media/background.png'
import pizza from './media/pizza.png'
import diamond from './media/diamond.png'
import egg from './media/egg.png'
import treasurebox from './media/treasurebox.png'
import cash from './media/cash.png'
import yacht from './media/yacht.png'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cards: [],
      setImage: null
    };
    this.addCard = this.addCard.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
    this.updateBalance = this.updateBalance.bind(this);
    this.backgroundPicker = this.backgroundPicker.bind(this)
  }

  
  componentDidMount() {
    axios.get("/api/cards").then(res => {
      this.setState({
        cards: res.data,
        setImage: background
      });
    });
  }

  
  backgroundPicker () {

    if (this.state.cards.length <= 5) {
        this.setState({
            setImage: background
        })
    } else if (this.state.cards.length === 6) {
      this.setState({
        setImage: pizza
      })
    } else if (this.state.cards.length === 7) {
      this.setState({
        setImage: diamond
      })
    } else if (this.state.cards.length === 8) {
      this.setState({
        setImage: egg
      })
    } else if (this.state.cards.length === 9) {
      this.setState({
        setImage: treasurebox
      })
    } else if (this.state.cards.length === 10) {
      this.setState({
        setImage: cash
      })
    } else if (this.state.cards.length >= 11) {
      this.setState({
        setImage: yacht
      })
    }
    console.log(this.state.cards.length)
    console.log(this.state.cards)
  }
  addCard(cardNumber, cardBalance) {
    axios
      .post("/api/add_card", {
        card: cardNumber,
        balance: cardBalance
      })
      .then(res => {
        this.setState({
          cards: res.data
        });
        this.backgroundPicker()
      });
  }

  deleteCard(id) {
    axios
      .delete(`/api/delete_card/${id}`)
      .then(res => {
        this.setState({
          cards: res.data
        });
        this.backgroundPicker()
      })
      .catch(err => console.log(err));
  }

  updateBalance(id, newBalance) {
    axios
      .put(`/api/update_balance/${id}`, {
        balance: newBalance
      })
      .then(res => {
        this.setState({
          cards: res.data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <div className="holder">
          <div className="submit-card">
            <SubmitCard 
            addCard={this.addCard} 
            backgroundPicker={this.backgroundPicker}
            />
          </div>
          <div className="progress">

            <Progress 
            setImage={this.state.setImage}
            />

          </div>
          <div className="list-card">
            <ListCards
              cards={this.state.cards}
              deletecard={this.deleteCard}
              updatebalance={this.updateBalance}
              backgroundPicker={this.backgroundPicker}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
