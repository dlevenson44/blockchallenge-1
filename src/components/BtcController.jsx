import React from 'react'

const BtcController = (props) => {
    // convert strings to numbers and round
    let usd = parseFloat(props.btcValue).toFixed(2)
    let usHigh24Hr = parseFloat(props.btcPolo.high24hr).toFixed(2)
    let usLow24Hr = parseFloat(props.btcPolo.low24hr).toFixed(2)
    let euro = parseFloat(props.btcKraken.eur).toFixed(2)
    let euHigh24Hr = parseFloat(props.btcKraken.trends.high).toFixed(2)
    let euLow24Hr = parseFloat(props.btcKraken.trends.low).toFixed(2)
    
    // convert alt values to numeric data type and round to 2 decimals
    let btc = parseFloat(props.btcValue)
    let dash = parseFloat(props.dashValue)
    let eth = parseFloat(props.ethValue)
    let ltc = parseFloat(props.ltcValue)

    // calculate alt per btc values
    let dashPerBtc = (btc / dash).toFixed(2)
    let ethPerBtc = (btc / eth).toFixed(2)
    let ltcPerBtc = (btc / ltc).toFixed(2)

    return(
        <div className="crypto-container">
            <h3>Crypt Exchange Rates</h3>
                <p>{dashPerBtc} DASH per BTC</p>
                <p>{ethPerBtc} ETH per BTC</p>
                <p>{ltcPerBtc} LTC per BTC</p>
                <h5>Trends:</h5>
                    <p>{props.btcKraken.trends.trades} trades in the last 24 hours</p>
                    <p>{props.btcCapCoin.oneHour}% change in last hour</p>
                    <p>{props.btcCapCoin.oneDay}% change in last 24 hours</p>
                    <p>{props.btcCapCoin.oneWeek}% change in last 7 days</p>                
            <h5>BTC US Market Info</h5>
                <p>${usd} per BTC</p>
                <p>${usHigh24Hr} is the 24 hour high</p>
                <p>${usLow24Hr} is the 24 hour low</p>                            
            <h5>BTC EU Market Info</h5>
                <p>€{euro} per BTC</p>
                <p>€{euHigh24Hr} is the 24 hour high</p>
                <p>€{euLow24Hr} is the 24 hour low</p>            
        </div>
    )
}

export default BtcController


