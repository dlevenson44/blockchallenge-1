import React from 'react'

const LtcController = (props) => {
    // convert to numeric data type and round to 2 decimals
    let usd = parseFloat(props.ltcCapCoin.usd).toFixed(2)
    let usHigh24Hr = parseFloat(props.ltcPolo.high24hr).toFixed(2)
    let usLow24Hr = parseFloat(props.ltcPolo.low24hr).toFixed(2)
    let euro = parseFloat(props.ltcKraken.eur).toFixed(2)
    let euHigh24Hr = parseFloat(props.ltcKraken.trends.high).toFixed(2)
    let euLow24Hr = parseFloat(props.ltcKraken.trends.low).toFixed(2)
    let btc = parseFloat(props.btcValue).toFixed(2)

    // calculate ltc per btc
    let ltcPerBtc = (usd / btc).toFixed(2)

    return(
        <div className="crypto-container">
            <h3>BTC Exchange Rate</h3>
                <p>{ltcPerBtc} LTC per BTC</p>            
            <h5>LTC Trends:</h5>
                <p>{props.ltcKraken.trends.trades} trades in the last 24 hours</p>
                <p>{props.ltcCapCoin.trends.oneHour}% change in last hour</p>
                <p>{props.ltcCapCoin.trends.oneDay}% change in last 24 hours</p>
                <p>{props.ltcCapCoin.trends.oneWeek}% change in last 7 days</p>
            <h5>LTC US Market Info</h5>
                <p>${usd} per LTC</p>
                <p>${usHigh24Hr} is the 24 hour high</p>
                <p>${usLow24Hr} is the 24 hour low</p>
            <h5>LTC EU Market Info</h5>
            <p>€{euro} per LTC</p>    
            <p>€{euHigh24Hr} is the 24 hour high</p>
            <p>€{euLow24Hr} is the 24 hour low</p>            
        </div>
    )
}

export default LtcController