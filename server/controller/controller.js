const cards = require('../../cards.json')
let num = 6;

module.exports = {
    listCards: (req,res,next) => {
        res.status(200).send(cards)
    },
    addCard: (req,res,next) => {
        const newCard = {
            id: num,
            card: req.body.card,
            balance: req.body.balance
        }
        cards.push(newCard)
        num++
        res.status(200).send(cards)
    },
    updateBalance: (req,res,next) => {
        const index = cards.findIndex((elem) => {
            return elem.id == req.params.id
        })
        cards[index].balance = req.body.balance
        res.status(200).send(cards)
    },
    deleteCard: (req,res,next) => {
        const index = cards.findIndex((elem) => {
            return elem.id == req.params.id
        })
        if (index === -1) {
            res.status(406).send(cards)
        } else {
            cards.splice(index,1)
        }
        res.status(200).send(cards)
    },
    checkCard: (req,res,next) => {
        console.log('from query ', req.query)
        const checkCardNumber = cards.filter(elem => {
            return elem.card === req.query.card
        })
        if(checkCardNumber.length){
            res.status(200).send('We have it')
        } else {
            res.status(200).send('Not yet....')
        }
    }

}