import React, { Component } from 'react'

class BTCKRAKEN extends Component {
    constructor(props) {
        super(props)
        this.state = {
            btcKraken: {
                eur: 0,
                trends: {
                    lowAsk: 0,
                    low: 0,
                    highBid: 0,
                    high: 0,
                    trades: 0
                }
            }
        }        
        this.btcKraken = this.btcKraken.bind(this)
    }
    
    componentWillMount() {
        this.btcKraken()
    }

    btcKraken() {
        fetch('https://api.kraken.com/0/public/Ticker?pair=XXBTZCAD', {
            method: 'GET',
        }).then(res => res.json())
        .then(res => {
            console.log(res)
            this.setState({
                btcKraken: {
                    eur: res.result.XXBTZCAD.c[0],
                    trends: {
                        lowAsk: res.result.XXBTZCAD.a[0],
                        low: res.result.XXBTZCAD.l[1],
                        highBid: res.result.XXBTZCAD.b[0],
                        high: res.result.XXBTZCAD.h[1],
                        trades: res.result.XXBTZCAD.t[1]
                    }
                }
            })
        })
    }

    render() {
        return(
            <div>
                <p>€{this.state.btcKraken.eur} per Bitcoin</p>
                <p>€{this.state.btcKraken.trends.lowAsk} is the low ask of the day</p>
                <p>€{this.state.btcKraken.trends.highBid} is the high bid of the day</p>
                <p>€{this.state.btcKraken.trends.low} is the low value in the last 24 hours</p>
                <p>€{this.state.btcKraken.trends.high} is the high value in the last 24 hours</p>
                <p>{this.state.btcKraken.trends.trades} transactions in the last 24 hours</p>
            </div>
        )
    }
}

export default BTCKRAKEN;