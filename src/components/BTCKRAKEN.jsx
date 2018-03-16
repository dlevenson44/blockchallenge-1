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
                <h1>hello world</h1>
            </div>
        )
    }
}

export default BTCKRAKEN;