// import react and stylesheet
import React, { Component } from 'react';
import './App.css';

// import components
import BtcController from './components/BtcController'
import DashController from './components/DashController'
import EthController from './components/EthController'
import LtcController from './components/LtcController'

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
      },
      dashCapCoin: {
        usd: 0,
        trends: {
          oneHour: 0,
          oneDay: 0,
          oneWeek: 0,
        }
      },
      dashKraken: {
        eur: 0,
        trends: {
            lowAsk: 0,
            low: 0,
            highBid: 0,
            high: 0,
            trades: 0
        }
      },
      dashPolo: {
        high24hr: 0,
        low24hr: 0
      },
      ethCapCoin: {
        usd: 0,
        trends: {
            oneHour: 0,
            oneDay: 0,
            oneWeek: 0
        }                    
      },
      ethKraken: {
        eur: 0,
        trends: {
            lowAsk: 0,
            low: 0,
            highBid: 0,
            high: 0,
            trades: 0
        }
      },
      ethPolo: {
        high24hr: 0,
        low24hr: 0
      },
      ltcCapCoin: {
        usd: 0,
        trends: {
            oneHour: 0,
            oneDay: 0,
            oneWeek: 0
        }                    
      },
      ltcKraken: {
        eur: 0,
        trends: {
            lowAsk: 0,
            low: 0,
            highBid: 0,
            high: 0,
            trades: 0
        }
      },
      ltcPolo: {
        high24hr: 0,
        low24hr: 0
      }
    }
    this.btcCapCoin = this.btcCapCoin.bind(this)
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
    fetch('https://poloniex.com/public?command=returnTicker', {
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
            },
            dashPolo: {
              high24hr: res.USDT_DASH.high24hr,
              low24hr: res.USDT_DASH.low24hr
            },
            ethPolo: {
              high24hr: res.USDT_ETH.high24hr,
              low24hr: res.USDT_ETH.low24hr
            },
            ltcPolo: {
              high24hr: res.USDT_LTC.high24hr,
              low24hr: res.USDT_LTC.low24hr
            }
        })
    })
    this.dashCapCoin()
  }

  dashCapCoin() {
    fetch('https://api.coinmarketcap.com/v1/ticker/dash/?convert=USD', {
        method: 'GET',
    }).then(res => res.json())
    .then(res => {
        this.setState({                
            dashCapCoin: {
                usd: res[0].price_usd,
                trends: {
                    oneHour: res[0].percent_change_1h,
                    oneDay: res[0].percent_change_24h,
                    oneWeek: res[0].percent_change_7d
                }                    
            }
        })
    })
    this.dashKraken()
  }

  dashKraken() {
    fetch('https://api.kraken.com/0/public/Ticker?pair=DASHEUR', {
      method: 'GET',
    }).then(res => res.json())
    .then(res => {
        console.log(res)
        this.setState({
            dashKraken: {
                eur: res.result.DASHEUR.c[0],
                trends: {
                    lowAsk: res.result.DASHEUR.a[0],
                    low: res.result.DASHEUR.l[1],
                    highBid: res.result.DASHEUR.b[0],
                    high: res.result.DASHEUR.h[1],
                    trades: res.result.DASHEUR.t[1]
                }
            }
        })
    })
    this.ethCapCoin()
  }

  ethCapCoin() {
    fetch('https://api.coinmarketcap.com/v1/ticker/ethereum/?convert=USD', {
        method: 'GET',
    }).then(res => res.json())
    .then(res => {
        this.setState({                
            ethCapCoin: {
                usd: res[0].price_usd,
                trends: {
                    oneHour: res[0].percent_change_1h,
                    oneDay: res[0].percent_change_24h,
                    oneWeek: res[0].percent_change_7d
                }                    
            }
        })
    })
    this.ethKraken()
  }

  ethKraken() {
    fetch('https://api.kraken.com/0/public/Ticker?pair=XETHZEUR', {
      method: 'GET',
    }).then(res => res.json())
    .then(res => {
        console.log(res)
        this.setState({
            ethKraken: {
                eur: res.result.XETHZEUR.c[0],
                trends: {
                    lowAsk: res.result.XETHZEUR.a[0],
                    low: res.result.XETHZEUR.l[1],
                    highBid: res.result.XETHZEUR.b[0],
                    high: res.result.XETHZEUR.h[1],
                    trades: res.result.XETHZEUR.t[1]
                }
            }
        })
    })
    this.ltcCapCoin()
  }

  ltcCapCoin() {
    fetch('https://api.coinmarketcap.com/v1/ticker/litecoin/?convert=USD', {
        method: 'GET',
    }).then(res => res.json())
    .then(res => {
      console.log(res, 'hey res')
        this.setState({                
            ltcCapCoin: {
                usd: res[0].price_usd,
                trends: {
                    oneHour: res[0].percent_change_1h,
                    oneDay: res[0].percent_change_24h,
                    oneWeek: res[0].percent_change_7d
                }                    
            }
        })
    })
    this.ltcKraken()
  }

  ltcKraken() {
    fetch('https://api.kraken.com/0/public/Ticker?pair=XLTCZUSD', {
      method: 'GET',
    }).then(res => res.json())
    .then(res => {
        console.log(res)
        this.setState({
            ltcKraken: {
                eur: res.result.XLTCZUSD.c[0],
                trends: {
                    lowAsk: res.result.XLTCZUSD.a[0],
                    low: res.result.XLTCZUSD.l[1],
                    highBid: res.result.XLTCZUSD.b[0],
                    high: res.result.XLTCZUSD.h[1],
                    trades: res.result.XLTCZUSD.t[1]
                }
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
        <DashController dashCapCoin={this.state.dashCapCoin}
        dashKraken={this.state.dashKraken}
        dashPolo={this.state.dashPolo} />
        <EthController ethCapCoin={this.state.ethCapCoin}
        ethKraken={this.state.ethKraken}
        ethPolo={this.state.ethPolo} />        
        <LtcController ltcCapCoin={this.state.ltcCapCoin}
        ltcKraken={this.state.ltcKraken}
        ltcPolo={this.state.ltcPolo} />
      </div>
    );
  }
}

export default App;