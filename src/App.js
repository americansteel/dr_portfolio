import React, { Component } from 'react';
import './App.scss';
import Overlay from './Components/Overlay/Overlay'
import About from './Components/About/About'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Overlay></Overlay>
      </div>
    );
  }
}

export default App;
