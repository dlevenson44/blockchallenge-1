import React, { Component } from 'react';
import './App.css';

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

  componentDidMount() {
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
    console.log(this.state.btcTicker)
    return (
      <div className="App">
        <h1>hello world</h1>
        <h3>{this.state.btcTicker.name}</h3>
      </div>
    );
  }
}

export default App;
