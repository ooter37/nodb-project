import React from 'react'
import DataRender from './DataRender'
import DeleteCard from './DeleteCard'
import UpdateBalance from './UpdateBalance'

export default function ListCards(props) {
    const mappedCards = props.cards.map(elem => {
        return <div className='list-cards' key={elem.id}>
            <DataRender card={elem.card}/>
            <DataRender balance={elem.balance}/>
            <DeleteCard id={elem.id} deletecard={props.deletecard}/>
            <UpdateBalance id={elem.id} updatebalance={props.updatebalance}/>

        </div>
    })
    return <div>
        <h1>Submitted Cards</h1>
        {mappedCards}
    </div>
}