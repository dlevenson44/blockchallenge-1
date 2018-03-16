// import react and stylesheet
import React, { Component } from 'react';
import './App.css';

// import components
import BtcTracker from './components/BtcTracker'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      btc: {
        usd: 0,
        eur: 0,
        trends: {
          oneHourUS: 0,
          oneHourEU: 0,
          oneDayUS: 0,
          oneDayEU: 0,
          oneWeekUS: 0,
          oneWeekEU: 0
        }
      },
      dash: {
        usd: 0,
        eur: 0,
        trends: {
          oneHourUS: 0,
          oneHourEU: 0,
          oneDayUS: 0,
          oneDayEU: 0,
          oneWeekUS: 0,
          oneWeekEU: 0
        }
      },
      eth: {
        usd: 0,
        eur: 0,
        trends: {
          oneHourUS: 0,
          oneHourEU: 0,
          oneDayUS: 0,
          oneDayEU: 0,
          oneWeekUS: 0,
          oneWeekEU: 0
        }
      },
      ltc: {
        usd: 0,
        eur: 0,
        trends: {
          oneHourUS: 0,
          oneHourEU: 0,
          oneDayUS: 0,
          oneDayEU: 0,
          oneWeekUS: 0,
          oneWeekEU: 0
        }
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
      console.log(res[0])
      this.setState({
        btc: {
          usd: res[0].price_usd,
          trends: {
            oneHourUS: res[0].percent_change_1h,
            oneDayUS: res[0].percent_change_24h,
            oneWeekUS: res[0].percent_change_7d
          }
        }
      })
    }) 
    fetch('https://api.coinmarketcap.com/v1/ticker/bitcoin/?convert=EUR', {
      method: 'GET',
    }).then(res => res.json())
    .then(res => {
      console.log(res[0])
      this.setState({
        btc: {
          eur: res[0].price_eur,
          trends: {
            oneHourEU: res[0].percent_change_1h,
            oneDayEU: res[0].percent_change_24h,
            oneWeekEU: res[0].percent_change_7d
          }
        }
      })
    })     
  }

  render() {
    return (
      <div className="App">
        <h1>hello world</h1>
        <BtcTracker btc={this.state.btc} />
      </div>
    );
  }
}

export default App;
