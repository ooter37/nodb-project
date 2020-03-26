import React from 'react';
import axios from 'axios'
import SubmitCard from './components/SubmitCard.js'
import ListCards from './components/ListCards'

import './App.css';
import './reset.css'

class App extends React.Component {
constructor() {
  super()
  this.state = {
    cards: []
  }
  this.addCard = this.addCard.bind(this)
  this.deleteCard = this.deleteCard.bind(this)
}

componentDidMount() {
  axios.get('/api/cards').then(res => {
    this.setState({
      cards: res.data

    })
  })
}

addCard(cardNumber, cardBalance) {
  axios.post('/api/add_card', {
    card: cardNumber,
    balance: cardBalance
  }).then(res => {
    this.setState({
      cards: res.data
    })
  })
}

deleteCard(id) {
  axios.delete(`/api/delete_card/${id}`).then(res => {
    this.setState({
      cards: res.data
    })
  })
}

updateBalance(id) {
  axios.put(`/api/update_card/${id}`).then(res => {
    this.setState({
      cards: res.data
    })
  })
}

  render(){

  return (
    <div className="App">
      <SubmitCard addCard={this.addCard}/>
      <ListCards 
      cards={this.state.cards} 
      deletecard={this.deleteCard}
      updatebalance={this.updateBalance}
      />
      
    </div>
  );
}
}
export default App;
