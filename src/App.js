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
  this.updateBalance = this.updateBalance.bind(this)
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

updateBalance(id, newBalance) {
  axios.put(`/api/update_balance/${id}`, {
    balance: newBalance
  }).then(res => {
    this.setState({
      cards: res.data
    })
  }).catch((err) => console.log(err))
}

  render(){

  return (
    <div className="App">
      <div className='holder'>
      <div className='submit-card'>
        <SubmitCard addCard={this.addCard}/>
      </div>
      <div className='progress'>
        PROGRESS BLACK DIAMOND!!
      </div>
      <div className='list-card'>
        <ListCards 
        cards={this.state.cards} 
        deletecard={this.deleteCard}
        updatebalance={this.updateBalance}
      />
      </div>
      </div>
    </div>
  );
}
}
export default App;
