const cards = require('../../cards.json')
let num = 6;

module.exports = {
    listCards: (req,res,next) => {
        res.status(200).send(cards)
    },
    progress: (req,res,next) => {
        // black diamond feature
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
    }

}