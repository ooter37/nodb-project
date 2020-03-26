import React from 'react'

export default function DeleteCard(props) {
    return <div>
        <button onClick={()  => props.deletecard(props.id)}>Delete</button>
    </div>
}