import React from 'react'

const DashController = (props) => {
    let usd = parseFloat(props.dashCapCoin.usd).toFixed(2)

    return(
        <div>
            <h1>DASH-- CapCoin</h1>
            <p>${usd} per DASH</p>
        </div>
    )
}

export default DashController