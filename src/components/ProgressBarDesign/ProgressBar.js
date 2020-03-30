import React from 'react'
import Filler from './ProgressBarFiller'


export default function ProgressBar(props) {
    return (
        <div className='progress-bar'>
            <Filler 
            percentage={props.percentage} 
            totalBalance={props.totalBalance}
            />
        </div>
    )
}
