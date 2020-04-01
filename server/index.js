const express = require('express')
const {listCards, addCard, updateBalance, deleteCard, checkCard} = require('./controller/controller') // destructure off controller here
const app = express()
const port = 4600
app.use(express.json())

app.listen(port, () => {console.log(`listening on port ${port}`)})

app.get('/api/cards', listCards)
app.post('/api/add_card', addCard)
app.put('/api/update_balance/:id', updateBalance)
app.delete('/api/delete_card/:id', deleteCard)
app.get('/api/card', checkCard)