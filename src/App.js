// import react and stylesheet
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

// import crypto components
import BtcController from './components/BtcController'
import DashController from './components/DashController'
import EthController from './components/EthController'
import LtcController from './components/LtcController'

// import charts
import Chart from './components/Chart'

// chartData.datasets[0].data[0 = BTC]

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      altPerBtc: {
        dash: 0,
        eth: 0,
        ltc: 0
      },
      btcValue: 0,
      btcCapCoin: {
        oneHour: 0,
        oneDay: 0,
        oneWeek: 0                   
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
      }, 
    }
		this.btcCoinDesk = this.btcCoinDesk.bind(this)
		this.renderChart = this.renderChart.bind(this)
  }

  componentWillMount() {
    this.btcCoinDesk()
  }

  btcCoinDesk() {
      fetch('https://api.coindesk.com/v1/bpi/currentprice/BTC.json', {
          method: 'GET'
      }).then(res => res.json())
      .then(res => {
                let btcValueContainer = ''
                let fetchBtcValue = (res.bpi.USD.rate)
                for(let i = 0; i < fetchBtcValue.length - 1; i++ ) {
                    if (fetchBtcValue[i] !== (",")){
                    btcValueContainer += fetchBtcValue[i]
                    }	
                }
                let actualValue = parseFloat(btcValueContainer)
          this.setState({
						btcValue: actualValue,
          })
      })
      this.btcCapCoin()
  }
  
  btcCapCoin() {
    fetch('https://api.coinmarketcap.com/v1/ticker/bitcoin/?convert=USD', {
        method: 'GET',
    }).then(res => res.json())
    .then(res => {
        this.setState({                
            btcCapCoin: {
                oneHour: res[0].percent_change_1h,
                oneDay: res[0].percent_change_24h,
                oneWeek: res[0].percent_change_7d       
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
        this.setState({
            btcPolo: {
                high24hr: res.USDT_BTC.high24hr,
                low24hr: res.USDT_BTC.low24hr,
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
        let dashValueContainer = ''
        let dashValue = res[0].price_usd
        for(let i = 0; i < dashValue.length -1; i++) {
            if (dashValue[i] !== (",")) {
                dashValueContainer += dashValue[i]
            }
        }
        let actualValue = parseFloat(dashValueContainer)
        this.setState({                
            dashCapCoin: {
                usd: actualValue,
                trends: {
                    oneHour: res[0].percent_change_1h,
                    oneDay: res[0].percent_change_24h,
                    oneWeek: res[0].percent_change_7d
                }                    
						},
        })
    })
    this.dashKraken()
  }

  dashKraken() {
    fetch('https://api.kraken.com/0/public/Ticker?pair=DASHEUR', {
      method: 'GET',
    }).then(res => res.json())
    .then(res => {
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
        let ethValueContainer = ''
        let ethValue = res[0].price_usd
        for(let i = 0; i < ethValue.length - 1; i++ ) {
            if(ethValue[i] !== (",")) {
                ethValueContainer += ethValue[i]
            }
        }
        let actualValue = parseFloat(ethValueContainer)
        this.setState({                
            ethCapCoin: {
                usd: actualValue,
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
        let ltcValueContainer = ''
        let ltcValue = res[0].price_usd
        for(let i = 0; i < ltcValue.length - 1; i ++ ) {
            if (ltcValue[i] !== (",")) {
                ltcValueContainer += ltcValue[i]
            }
        }
        let actualValue = parseFloat(ltcValueContainer)
        this.setState({                
            ltcCapCoin: {
                usd: actualValue,
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
        let dashPerBtc = (this.state.btcValue / this.state.dashCapCoin.usd)
        let ethPerBtc = (this.state.btcValue / this.state.ethCapCoin.usd)
        let ltcPerBtc = (this.state.btcValue / this.state.ltcCapCoin.usd)
        console.log(this.state.btcValue)
        console.log(dashPerBtc, ethPerBtc, ltcPerBtc)
        this.setState({
            altPerBtc: {
                dash: dashPerBtc,
                eth: ethPerBtc,
                ltc: ltcPerBtc
            },
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
		this.renderChart()
    }
	
	renderChart() {
		if (this.state.btcValue !== 0) {
			return(
				<div>
				<Chart  altPerBtc={this.state.altPerBtc} />
				</div>
			)
		} else {
			return(
				<div>
					<p>Loading Chart</p>
				</div>
			)
		}

	}

  render() {
    return (
      <div className="App">
        <h1>hello world</h1>
        {this.renderChart()}			

        <BtcController btcValue={this.state.btcValue} 
        btcCapCoin={this.state.btcCapCoin}
        btcKraken={this.state.btcKraken}
        btcPolo={this.state.btcPolo}
        dashValue={this.state.dashCapCoin.usd}
        ethValue={this.state.ethCapCoin.usd}
        ltcValue={this.state.ltcCapCoin.usd} />

        <DashController btcValue={this.state.btcValue}
        dashCapCoin={this.state.dashCapCoin}
        dashKraken={this.state.dashKraken}
        dashPolo={this.state.dashPolo} />

        <EthController btcValue={this.state.btcValue}
        ethCapCoin={this.state.ethCapCoin}
        ethKraken={this.state.ethKraken}
        ethPolo={this.state.ethPolo} />

        <LtcController btcValue={this.state.btcValue}
        ltcCapCoin={this.state.ethCapCoin}
        ltcKraken={this.state.ltcKraken}
        ltcPolo={this.state.ltcPolo} />

      </div>
		);			
	}		
}

export default App;