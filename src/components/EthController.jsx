import React from 'react'

const EthController = (props) => {
    // convert to numeric data type and round to 2 decimals
    let usd = parseFloat(props.ethCapCoin.usd).toFixed(2)
    let usHigh24Hr = parseFloat(props.ethPolo.high24hr).toFixed(2)
    let usLow24Hr = parseFloat(props.ethPolo.low24hr).toFixed(2)
    let euro = parseFloat(props.ethKraken.eur).toFixed(2)
    let highBid = parseFloat(props.ethKraken.trends.highBid).toFixed(2)
    let lowAsk = parseFloat(props.ethKraken.trends.lowAsk).toFixed(2)
    let euHigh24Hr = parseFloat(props.ethKraken.trends.high).toFixed(2)
    let euLow24Hr = parseFloat(props.ethKraken.trends.low).toFixed(2)
    let btc = parseFloat(props.btcValue).toFixed(2)

    // calculate eth per btc
    let ethPerBtc = (usd / btc).toFixed(2)

    return(
        <div>
            <h1>Eth -CapCoin</h1>
            <p>${usd} per Eth</p>
            <h5>Eth Trends:</h5>
                <p>{props.ethCapCoin.trends.oneHour}% change in last hour</p>
                <p>{props.ethCapCoin.trends.oneDay}% change in last 24 hours</p>
                <p>{props.ethCapCoin.trends.oneWeek}% change in last 7 days</p>
            <h1>Eth - Kraken</h1>
            <p>€{euro} per Eth</p>
            <p>€{highBid} is the high bid</p>
            <p>€{lowAsk} is the low ask</p>            
            <p>€{euHigh24Hr} is the 24 hour high</p>
            <p>€{euLow24Hr} is the 24 hour low</p>
            <p>{props.ethKraken.trends.trades} trades in the last 24 hours</p>
            <h1>ETH - ETH pOLO</h1>
            <p>${usHigh24Hr} is the 24 hour high</p>
            <p>${usLow24Hr} is the 24 hour low</p>
            <p>{ethPerBtc} ETH per BTC</p>
        </div>
    )
}

export default EthController