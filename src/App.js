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
        <div className="is-expanded">
          <div className="is-33pct">
            <vue-data-table str="สวัสดี Vue.js" num={456} bool={false} obj="{'name': 'Pongsatorn'}" arr={[4, 5, 6]}/>
          </div>
          <div className="is-33pct">
            React Custom Element coming soon...
          </div>
          <div className="is-33pct">
            Angular Custom Element coming soon...
          </div>
        </div>
      </div>
    )
  }
}

export default App;
