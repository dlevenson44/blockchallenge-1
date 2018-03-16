import React from 'react'

const DashController = (props) => {
    let usd = parseFloat(props.dashCapCoin.usd).toFixed(2)

    return(
        <div>
            <h1>DASH-- CapCoin</h1>
            <p>${usd} per DASH</p>
            <h1>DASH-- Kraken</h1>
            <p>€{props.dashKraken.eur} per DASH</p>
        </div>
    )
}

export default DashController