import React from 'react'

const EthController = (props) => {
    // convert to numeric data type and round to 2 decimals
    let usd = parseFloat(props.ethCapCoin.usd).toFixed(2)
    let usHigh24Hr = parseFloat(props.ethPolo.high24hr).toFixed(2)
    let usLow24Hr = parseFloat(props.ethPolo.low24hr).toFixed(2)
    let euro = parseFloat(props.ethKraken.eur).toFixed(2)
    let euHigh24Hr = parseFloat(props.ethKraken.trends.high).toFixed(2)
    let euLow24Hr = parseFloat(props.ethKraken.trends.low).toFixed(2)
    let btc = parseFloat(props.btcValue).toFixed(2)

    // calculate eth per btc
    let ethPerBtc = (usd / btc).toFixed(2)

    return(
        <div className="crypto-container">
            <h3>BTC Exchange Rate</h3>
                <p>{ethPerBtc} ETH per BTC</p>
            <h5>ETH Trends:</h5>
                <p>{props.ethKraken.trends.trades} trades in the last 24 hours</p>
                <p>{props.ethCapCoin.trends.oneHour}% change in last hour</p>
                <p>{props.ethCapCoin.trends.oneDay}% change in last 24 hours</p>
                <p>{props.ethCapCoin.trends.oneWeek}% change in last 7 days</p>
            <h5>ETH US Market Info</h5>
                <p>${usd} per Eth</p>
                <p>${usHigh24Hr} is the 24 hour high</p>
                <p>${usLow24Hr} is the 24 hour low</p>
            <h5>ETH EU Market Info</h5>        
                <p>€{euro} per Eth</p>          
                <p>€{euHigh24Hr} is the 24 hour high</p>
                <p>€{euLow24Hr} is the 24 hour low</p>                            
        </div>
    )
}

export default EthController