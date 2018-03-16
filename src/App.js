// import react and stylesheet
import React, { Component } from 'react';
import './App.css';

// import components
import BtcController from './components/BtcController'
// import BtcCoinCap from './components/BtcCoinCap'
// import BtcPolo from './components/BtcPolo'
// import BtcKraken from './components/BtcKraken'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {      
      selectedCurrency: ''
    }
  }

  render() {
    return (
      <div className="App">
        <h1>hello world</h1>
        <BtcController />
      </div>
    );
  }
}

export default App;