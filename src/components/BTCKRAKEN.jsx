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
    }

    render() {
        return(
            <div>
                <p>€{this.state.btcKraken.eur} per Bitcoin</p>
                <p>€{this.state.btcKraken.trends.lowAsk} is the low ask of the day</p>
                <p>€{this.state.btcKraken.trends.highAsk} is the high ask of the day</p>
                <p>€{this.state.btcKraken.trends.low} is the low value of the day</p>
                <p>€{this.state.btcKraken.trends.high} is the high value of the day</p>
                <p>{this.state.btcKraken.trends.trades} transactions today</p>
            </div>
        )
    }
}

export default BTCKRAKEN;