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
        trends: {
          oneHour: 0,
          oneDay: 0,
          oneWeek: 0
        }
      },
      ethTicker: {},
      dashTicker: {},
      ltcTicker: {}
    }
    this.getBtcTicker = this.getBtcTicker.bind(this)
  }

  componentWillMount() {
    this.getBtcTicker()
  }

  getBtcTicker() {
    fetch('https://api.coinmarketcap.com/v1/ticker/bitcoin/?convert=USD', {
      method: 'GET',
    }).then(res => res.json())
    .then(res => {
      this.setState({
        btc: {
          usd: res[0].price_usd,
          trends: {
            oneHour: res[0].percent_change_1h,
            oneDay: res[0].percent_change_24h,
            oneWeek: res[0].percent_change_1w
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
