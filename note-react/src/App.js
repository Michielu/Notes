import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props){
      super(props);
      this.state = {users:[], text: ""};

      this.addText = this.addText.bind(this);
    }



  addText(){
    this.setState({text:"ahh"});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <body>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button  class="firstbutton" onCLick={this.addText}>Get users</button>
        <p class="text-users">{this.state.text}</p>
        </body>
      </div>
    );
  }
}

export default App;
