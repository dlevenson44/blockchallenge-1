import React from 'react'

const BtcController = (props) => {
    // convert strings to numbers for rounding
    let test = parseFloat(props.btcPolo.high24hr)
    
    return(
        <div>
            <h1>BTC -CapCoin</h1>
            <p>${props.btcCapCoin.usd} per BTC</p>
            <h5>BTC Trends:</h5>
            <ul>
                <li>{props.btcCapCoin.trends.oneHour}</li>
                <li>{props.btcCapCoin.trends.oneDay}</li>
                <li>{props.btcCapCoin.trends.oneWeek}</li>
            </ul>
            <h1>BTC - Kraken</h1>
            <p>€{props.btcKraken.eur} per BTC</p>
            <h1>BTC - btc pOLO</h1>
            <p>{test}</p>
        </div>
    )
}

export default BtcController


