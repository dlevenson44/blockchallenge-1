import React, { Component } from 'react'

class BTCPOLO extends Component {
    constructor(props) {
        super(props)
        this.state = {
            btcPolo: {
                lowAsk: 0,
                highBid: 0,
                high24hr: 0,
                low24hr: 0,
            }
        }
    }
    
    render() {
        return(
            <div>
                <h1> hello world</h1>
            </div>
        )
    }
}

export default BTCPOLO