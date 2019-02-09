import React, { Component } from 'react';
import './App.scss';
import { Route, HashRouter } from 'react-router-dom'
import Overlay from './Components/Overlay/Overlay'
import About from './Components/About/About'
import Nav from './Components/Nav/Nav'
import Work from './Components/Work/Work'
import Resume from './Components/Resume/Resume'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Route path='/' component={Overlay}></Route>
          <Nav></Nav>
          <div className="content">
            <Route path='/about' component={About}/>
            <Route path='/work' component={Work}/>
            <Route path='/resume' component={Resume}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
