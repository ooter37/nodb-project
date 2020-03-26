import React from 'react'

export default function DataRender(props) {
    const {balance, card} = props
    return <div className='render'>
        <span>{card}</span>
        <span>{balance}</span>
    </div>
}