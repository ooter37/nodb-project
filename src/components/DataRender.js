import React from 'react'

export default function DataRender(props) {
    return <div>
        <span>{props.card}</span>
        <span>${props.balance}</span>
    </div>
}