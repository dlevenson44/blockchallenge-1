import React from 'react'

const BtcCoinCap = (props) => {
    return(
        <div>
            <h1>Bitcoin</h1>
            <p>${props.btcCapCoin.usd} per BTC</p>
            <h5>BTC Trends:</h5>
            <ul>
                <li>{props.btcCapCoin.trends.oneHour}</li>
                <li>{props.btcCapCoin.trends.oneDay}</li>
                <li>{props.btcCapCoin.trends.oneWeek}</li>
            </ul>
        </div>
    )
}

export default BtcCoinCap

// import React, { Component } from 'react'

// class BtcCoinCap extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             btcCapCoin: {
//                 usd: 0,
//                 trends: {
//                     oneHour: 0,
//                     oneDay: 0,
//                     oneWeek: 0,
//                 }
//             }
//         }
//         this.btcCapCoin = this.btcCapCoin.bind(this)
//     }

//     componentWillMount() {
//         this.btcCapCoin()
//     }

//     btcCapCoin() {
//         fetch('https://api.coinmarketcap.com/v1/ticker/bitcoin/?convert=USD', {
//             method: 'GET',
//         }).then(res => res.json())
//         .then(res => {
//             this.setState({                
//                 btcCapCoin: {
//                     usd: res[0].price_usd,
//                     trends: {
//                         oneHour: res[0].percent_change_1h,
//                         oneDay: res[0].percent_change_24h,
//                         oneWeek: res[0].percent_change_7d
//                     }                    
//                 }
//             })
//         })
//     }

//     render() {
//         return(
//             <div>
//                 <h1>BitCoin</h1>
//                 <p>${this.state.btcCapCoin.usd} per bitcoin</p>
//                 <p>{this.state.btcCapCoin.trends.oneHour}% change in last hour</p>
//                 <p>{this.state.btcCapCoin.trends.oneDay}% change in last day</p>
//                 <p>{this.state.btcCapCoin.trends.oneWeek}% change in last week</p>
//             </div>
//         )
//     }
// }