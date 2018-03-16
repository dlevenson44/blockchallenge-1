// import react and stylesheet
import React, { Component } from 'react';
import './App.css';

// import components
import BtcController from './components/BtcController'
// import DashController from './components/DashController'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {      
      selectedCurrency: '',
      btcCapCoin: {
        usd: 0,
        trends: {
            oneHour: 0,
            oneDay: 0,
            oneWeek: 0
        }                    
      },
      btcKraken: {
        eur: 0,
        trends: {
            lowAsk: 0,
            low: 0,
            highBid: 0,
            high: 0,
            trades: 0
        }
      },
      btcPolo: {
        high24hr: 0,
        low24hr: 0,
        btcToDash: 0,
        btcToEth: 0,
        btcToLtc: 0
    }
    }
    this.btcCapCoin = this.btcCapCoin.bind(this)
    this.btcKraken = this.btcKraken.bind(this)
    this.btcPolo = this.btcPolo.bind(this)
  }

  componentWillMount() {
    this.btcCapCoin()
  }
  
  btcCapCoin() {
    fetch('https://api.coinmarketcap.com/v1/ticker/bitcoin/?convert=USD', {
        method: 'GET',
    }).then(res => res.json())
    .then(res => {
        this.setState({                
            btcCapCoin: {
                usd: res[0].price_usd,
                trends: {
                    oneHour: res[0].percent_change_1h,
                    oneDay: res[0].percent_change_24h,
                    oneWeek: res[0].percent_change_7d
                }                    
            }
        })
    })
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
    console.log(this)
    return (
      <div className="App">
        <h1>hello world</h1>
        <BtcController btcCapCoin={this.state.btcCapCoin} 
        btcKraken={this.state.btcKraken}
        btcPolo={this.state.btcPolo} />
      </div>
    );
  }
}

export default App;