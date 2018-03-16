import React from 'react'

const BtcController = (props) => {
    // convert strings to numbers and round
    let usHigh24Hr = parseFloat(props.btcPolo.high24hr).toFixed(2)
    let usLow24Hr = parseFloat(props.btcPolo.low24hr).toFixed(2)
    let euro = parseFloat(props.btcKraken.eur).toFixed(2)
    let highBid = parseFloat(props.btcKraken.trends.highBid).toFixed(2)
    let lowAsk = parseFloat(props.btcKraken.trends.lowAsk).toFixed(2)
    let euHigh24Hr = parseFloat(props.btcKraken.trends.high).toFixed(2)
    let euLow24Hr = parseFloat(props.btcKraken.trends.low).toFixed(2)
    
    return(
        <div>
            <h1>BTC -CapCoin</h1>
            <p>${props.btcCapCoin.usd} per BTC</p>
            <h5>BTC Trends:</h5>
                <p>{props.btcCapCoin.trends.oneHour}% change in last hour</p>
                <p>{props.btcCapCoin.trends.oneDay}% change in last 24 hours</p>
                <p>{props.btcCapCoin.trends.oneWeek}% change in last 7 days</p>
            <h1>BTC - Kraken</h1>
            <p>€{euro} per BTC</p>
            <p>€{highBid} is the high bid</p>
            <p>€{lowAsk} is the low ask</p>            
            <p>€{euHigh24Hr} is the 24 hour high</p>
            <p>€{euLow24Hr} is the 24 hour low</p>
            <p>{props.btcKraken.trends.trades} trades in the last 24 hours</p>
            <h1>BTC - btc pOLO</h1>
            <p>${usHigh24Hr} is the 24 hour high</p>
            <p>${usLow24Hr} is the 24 hour low</p>
        </div>
    )
}

export default BtcController


