import React from 'react'

const DashController = (props) => {
    // convert to numeric data type and round to 2 decimals
    let usd = parseFloat(props.dashCapCoin.usd).toFixed(2)
    let usHigh24Hr = parseFloat(props.dashPolo.high24hr).toFixed(2)
    let usLow24Hr = parseFloat(props.dashPolo.low24hr).toFixed(2)
    let euro = parseFloat(props.dashKraken.eur).toFixed(2)
    let highBid = parseFloat(props.dashKraken.trends.highBid).toFixed(2)
    let lowAsk = parseFloat(props.dashKraken.trends.lowAsk).toFixed(2)
    let euHigh24Hr = parseFloat(props.dashKraken.trends.high).toFixed(2)
    let euLow24Hr = parseFloat(props.dashKraken.trends.low).toFixed(2)

    return(
        <div>
            <h1>Dash -CapCoin</h1>
            <p>${usd} per dash</p>
            <h5>Dash Trends:</h5>
                <p>{props.dashCapCoin.trends.oneHour}% change in last hour</p>
                <p>{props.dashCapCoin.trends.oneDay}% change in last 24 hours</p>
                <p>{props.dashCapCoin.trends.oneWeek}% change in last 7 days</p>
            <h1>BTC - Kraken</h1>
            <p>€{euro} per BTC</p>
            <p>€{highBid} is the high bid</p>
            <p>€{lowAsk} is the low ask</p>            
            <p>€{euHigh24Hr} is the 24 hour high</p>
            <p>€{euLow24Hr} is the 24 hour low</p>
            <p>{props.dashKraken.trends.trades} trades in the last 24 hours</p>
            <h1>BTC - btc pOLO</h1>
            <p>${usHigh24Hr} is the 24 hour high</p>
            <p>${usLow24Hr} is the 24 hour low</p>
        </div>
    )
}

export default DashController