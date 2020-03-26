import React from 'react'
import DataRender from './DataRender'
import DeleteCard from './DeleteCard'
import UpdateBalance from './UpdateBalance'

export default function ListCards(props) {
    const mappedCards = props.cards.map(elem => {
        const formatted = 'Card Number: ' +elem.card.slice(0,4)+' '+elem.card.slice(4,8)+' '+elem.card.slice(8,12)+' '+elem.card.slice(12,16)
        return <div className='mapped-cards' key={elem.id}>
            <div className='card-elements'>
            <DataRender card={formatted}/>
            <DeleteCard id={elem.id} deletecard={props.deletecard}/>
                 <div className="balance">
                     $
                <DataRender balance={elem.balance}/>
                </div>
            <UpdateBalance id={elem.id} updatebalance={props.updatebalance}/>
            </div>
        </div>
    })
    return <div>
        <h1>Submitted Cards</h1>
        {mappedCards}
    </div>
}