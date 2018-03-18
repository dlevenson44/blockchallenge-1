// import react and stylesheet
import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';

// import nav
import Nav from './components/Nav'

// import crypto components
import BtcController from './components/BtcController'
import DashController from './components/DashController'
import EthController from './components/EthController'
import LtcController from './components/LtcController'

// import charts
import BtcChart from './components/BtcChart'
import DollarChart from './components/DollarChart'
import TrendChart from './components/TrendChart'
import ChartController from './components/ChartController';

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
			low: 0,
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
			low: 0,
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
			low: 0,
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
			low: 0,
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
					low: res.result.XXBTZCAD.l[1],
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
		let dashValueContainer = ''
		let dashValue = res.result.DASHEUR.c[0]
		for(let i = 0; i < dashValue.length - 1; i++) {
			if(dashValue[i] !== (",")) {
				dashValueContainer += dashValue[i]
			}
		}
		let actualValue = parseFloat(dashValueContainer)
		this.setState({
			dashKraken: {
				eur: actualValue,
				trends: {
					low: res.result.DASHEUR.l[1],
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
		let ethValueContainer = ''
		let ethValue = res.result.XETHZEUR.c[0]
		for(let i = 0; i < ethValue.length - 1; i++ ) {
			if(ethValue[i] !== (",")) {
				ethValueContainer += ethValue[i]
			}
		}
		let actualValue = parseFloat(ethValueContainer)
		this.setState({
			ethKraken: {
				eur: actualValue,
				trends: {
					low: res.result.XETHZEUR.l[1],
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
		let ltcValueContainer = ''
		let ltcValue = res.result.XLTCZUSD.c[0]
		for(let i = 0; i < ltcValue.length - 1; i ++ ) {
			if (ltcValue[i] !== (",")) {
				ltcValueContainer += ltcValue[i]
			}
		}
		let actualValue = parseFloat(ltcValueContainer)
		this.setState({
			altPerBtc: {
				dash: dashPerBtc,
				eth: ethPerBtc,
				ltc: ltcPerBtc
			},
			ltcKraken: {
				eur: actualValue,
				trends: {
					low: res.result.XLTCZUSD.l[1],
					high: res.result.XLTCZUSD.h[1],
					trades: res.result.XLTCZUSD.t[1]
				}
			}
		})
		})
		this.renderChart()
	}
	
	renderChart() {
		if ((this.state.altPerBtc.dash !== 0) && (this.state.altPerBtc.dash !== Infinity) && (this.state.altPerBtc.eth !== 0) && (
			this.state.altPerBtc.eth !== Infinity) && (this.state.altPerBtc.dash !== 0) 
			&& (this.state.altPerBtc.eth !== Infinity)) {
			return(
				<div>
				<BtcChart  altPerBtc={this.state.altPerBtc} />
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
	
	renderChartDollar() {
		if((this.state.dashKraken.eur !== 0) && (this.state.ethKraken.eur !== 0) && (this.state.ltcKraken.eur !== 0)) {
			return(
				<div>
					<DollarChart dashUsd={this.state.dashCapCoin.usd} 
					dashEur={this.state.dashKraken.eur} 
					ethUsd={this.state.ethCapCoin.usd} 
					ethEur={this.state.ethKraken.eur} 
					ltcUsd={this.state.ltcCapCoin.usd} 
					ltcEur={this.state.ltcKraken.eur} />
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

	renderChartTrend() {
		if(this.state.altPerBtc.dash !== 0) {
			return(
				<div>
					<TrendChart btcTrends={this.state.btcCapCoin} 
					dashTrends={this.state.dashCapCoin.trends} 
					ethTrends={this.state.ethCapCoin.trends} 
					ltcTrends={this.state.ltcCapCoin.trends} />
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
			<Router>
				<div className="App">
				<div className="container">
				<h1>Crypto Tracker</h1>
				<Nav />
				<div>
				<Route path='/blockchallenge-1' render={() => <ChartController renderChart={this.renderChart()} renderChartDollar={this.renderChartDollar()} renderChartTrend={this.renderChartTrend()} />} />
				<Route path='/bitcoin' render={() => <BtcController btcValue={this.state.btcValue} 
					btcCapCoin={this.state.btcCapCoin}
					btcKraken={this.state.btcKraken}
					btcPolo={this.state.btcPolo}
					dashValue={this.state.dashCapCoin.usd}
					ethValue={this.state.ethCapCoin.usd}
					ltcValue={this.state.ltcCapCoin.usd} />
				} />
				<Route path='/dash' render={() => <DashController btcValue={this.state.btcValue}
					dashCapCoin={this.state.dashCapCoin}
					dashKraken={this.state.dashKraken}
					dashPolo={this.state.dashPolo} />
				} />
				<Route path='/ethereum' render={() => <EthController btcValue={this.state.btcValue}
					ethCapCoin={this.state.ethCapCoin}
					ethKraken={this.state.ethKraken}
					ethPolo={this.state.ethPolo} />
				} />
				<Route path='/litecoin' render={() => <LtcController btcValue={this.state.btcValue}
					ltcCapCoin={this.state.ethCapCoin}
					ltcKraken={this.state.ltcKraken}
					ltcPolo={this.state.ltcPolo} />				
				} />
				</div>
				</div>
				</div>
			</Router>
		);			
	}		
}

export default App;