// import react and stylesheet
import React, { Component } from 'react';
import './App.css';

// import components
import BtcTracker from './components/BtcTracker'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      btcTicker: '',
      ethTicker: '',
      dashTicker: '',
      ltcTicker: ''
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
      // console.log(res[0])
      this.setState({
        btcTicker: res[0]
      })
    })
  }

  render() {
    // console.log(this.state.btcTicker)
    return (
      <div className="App">
        <h1>hello world</h1>
        <BtcTracker btcTracker={this.state.btcTicker} />
      </div>
    );
  }
}

export default App;
