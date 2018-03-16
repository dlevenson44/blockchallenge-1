// import react and stylesheet
import React, { Component } from 'react';
import './App.css';

// import components
import BtcController from './components/BtcController'
import DashController from './components/DashController'

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
        <DashController />
      </div>
    );
  }
}

export default App;