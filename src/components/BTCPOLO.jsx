import React, { Component } from 'react'

class BTCPOLO extends Component {
    constructor(props) {
        super(props)
        this.state = {
            btcPolo: {
                high24hr: 0,
                low24hr: 0,
                btcToDash: 0,
                btcToEth: 0,
                btcToLtc: 0
            }
        }
        this.btcPolo = this.btcPolo.bind(this)
    }

    componentWillMount() {
        this.btcPolo()
    }

    btcPolo() {
        fetch(' https://poloniex.com/public?command=returnTicker', {
            method: 'GET',
        }).then(res => res.json())
        .then(res => {
            console.log(res)
            this.setState({
                btcPolo: {
                    high24hr: res.USDT_BTC.high24hr,
                    low24hr: res.USDT_BTC.low24hr,
                    btcToDash: res.BTC_DASH.last,
                    btcToEth: res.BTC_ETH.last,
                    btcToLtc: res.BTC_LTC.last
                }
            })
        })
    }
    
    render() {
        return(
            <div>
                <p>The 24 hour high is ${this.state.btcPolo.high24hr}</p>
                <p>The 24 hour low is ${this.state.btcPolo.low24hr}</p>
                <p>You can currently buy {this.state.btcPolo.btcToDash} BTC per DASH.</p>
                <p>You can currently buy {this.state.btcPolo.btcToEth} BTC per Etherium.</p>
                <p>You can currently buy {this.state.btcPolo.btcToLtc} BTC per LiteCoin.</p>
            </div>
        )
    }
}

export default BTCPOLO