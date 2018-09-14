import React, { Component } from 'react'
import reactLogo from './assets/react-logo.svg'
import vueLogo from './assets/vue-logo.png'
import angularLogo from './assets/angular-logo.png'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={reactLogo} className="App-logo" alt="logo"/>
          <img src={vueLogo} className="App-logo" alt="logo"/>
          <img src={angularLogo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Micro frontend 101</h1>
        </header>
      </div>
    )
  }
}

export default App;
