// import react and stylesheet
import React, { Component } from 'react';
import './App.css';

// import components
// import BtcController from './components/BtcController'
// import DashController from './components/DashController'
import BtcCoinCap from './components/BtcCoinCap'

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
  }

  render() {
    console.log(this)
    return (
      <div className="App">
        <h1>hello world</h1>
        <BtcCoinCap btcCapCoin={this.state.btcCapCoin} />
      </div>
    );
  }
}

export default App;