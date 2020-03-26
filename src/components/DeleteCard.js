import React from 'react'

export default function DeleteCard(props) {
    const {id} = props
    return <div>
        <button onClick={()  => props.deletecard(id)}>Delete</button>
    </div>
}