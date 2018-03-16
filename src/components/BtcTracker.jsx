import React from 'react'

const BtcTracker = (props) => {
    return(
        <div>
            <h1>Bitcoin</h1>
            <p>${props.btc.usd} per BTC</p>
            <h5>BTC Trends:</h5>
            <ul>
                <li>{props.btc.trends.oneHour}</li>
                <li>{props.btc.trends.oneDay}</li>
                <li>{props.btc.trends.oneWeek}</li>
            </ul>
        </div>
    )
}

export default BtcTracker