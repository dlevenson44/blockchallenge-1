import React from 'react'

const BtcController = (props) => {
    // convert strings to numbers for rounding
    let high24Hr = parseFloat(props.btcPolo.high24hr)
    let low24Hr = parseFloat(props.btcPolo.low24hr).toFixed(2)
    
    return(
        <div>
            <h1>BTC -CapCoin</h1>
            <p>${props.btcCapCoin.usd} per BTC</p>
            <h5>BTC Trends:</h5>
                <p>{props.btcCapCoin.trends.oneHour}% change in last hour</p>
                <p>{props.btcCapCoin.trends.oneDay}% change in last 24 hours</p>
                <p>{props.btcCapCoin.trends.oneWeek}% change in last 7 days</p>
            <h1>BTC - Kraken</h1>
            <p>€{props.btcKraken.eur} per BTC</p>
            <h1>BTC - btc pOLO</h1>
            <p>${high24Hr} is the 24 hour high</p>
            <p>${low24Hr} is the 24 hour low</p>
        </div>
    )
}

export default BtcController


