import React from 'react'

const LtcController = (props) => {
    // convert to numeric data type and round to 2 decimals
    let usd = parseFloat(props.ltcCapCoin.usd).toFixed(2)
    let usHigh24Hr = parseFloat(props.ltcPolo.high24hr).toFixed(2)
    let usLow24Hr = parseFloat(props.ltcPolo.low24hr).toFixed(2)
    let euro = parseFloat(props.ltcKraken.eur).toFixed(2)
    let highBid = parseFloat(props.ltcKraken.trends.highBid).toFixed(2)
    let lowAsk = parseFloat(props.ltcKraken.trends.lowAsk).toFixed(2)
    let euHigh24Hr = parseFloat(props.ltcKraken.trends.high).toFixed(2)
    let euLow24Hr = parseFloat(props.ltcKraken.trends.low).toFixed(2)
    let btc = parseFloat(props.btcValue).toFixed(2)

    // calculate ltc per btc
    let ltcPerBtc = (btc / usd).toFixed(2)

    return(
        <div>
            <h1>LTC -CapCoin</h1>
            <p>${usd} per LTC</p>
            <h5>LTC Trends:</h5>
                <p>{props.ltcCapCoin.trends.oneHour}% change in last hour</p>
                <p>{props.ltcCapCoin.trends.oneDay}% change in last 24 hours</p>
                <p>{props.ltcCapCoin.trends.oneWeek}% change in last 7 days</p>
            <h1>LTC - Kraken</h1>
            <p>€{euro} per LTC</p>
            <p>€{highBid} is the high bid</p>
            <p>€{lowAsk} is the low ask</p>            
            <p>€{euHigh24Hr} is the 24 hour high</p>
            <p>€{euLow24Hr} is the 24 hour low</p>
            <p>{props.ltcKraken.trends.trades} trades in the last 24 hours</p>
            <h1>LTC - LTC pOLO</h1>
            <p>${usHigh24Hr} is the 24 hour high</p>
            <p>${usLow24Hr} is the 24 hour low</p>
            <p>{ltcPerBtc} LTC per BTC</p>
        </div>
    )
}

export default LtcController