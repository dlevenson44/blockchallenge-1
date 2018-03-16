// import react and stylesheet
import React, { Component } from 'react';
import './App.css';

// import components
import BTCUSD from './components/BTCUSD'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {      
      selectedCurrency: ''
    }
    // this.btcCapCoin = this.btcCapCoin.bind(this)
  }

  render() {
    return (
      <div className="App">
        <h1>hello world</h1>
        <BTCUSD />
      </div>
    );
  }
}

export default App;



// btc: {
//   usd: 0,
//   eur: 0,
//   eurInfo: {
//     ask: 0,
//     bid: 0,
//     high: 0,
//     low: 0
//   },
//   trends: {
//     oneHour: 0,
//     oneDay: 0,
//     oneWeek: 0
//   }
// },
// dash: {
//   usd: 0,
//   eur: 0,
//   eurInfo: {
//     ask: 0,
//     bid: 0,
//     high: 0,
//     low: 0
//   },
//   trends: {
//     oneHour: 0,
//     oneDay: 0,
//     oneWeek: 0
//   }
// },
// eth: {
//   usd: 0,
//   eur: 0,
//   eurInfo: {
//     ask: 0,
//     bid: 0,
//     high: 0,
//     low: 0
//   },
//   trends: {
//     oneHour: 0,
//     oneDay: 0,
//     oneWeek: 0
//   }
// },
// ltc: {
//   usd: 0,
//   eur: 0,
//   eurInfo: {
//     ask: 0,
//     bid: 0,
//     high: 0,
//     low: 0
//   },
//   trends: {
//     oneHour: 0,
//     oneDay: 0,
//     oneWeek: 0
//   }
// }