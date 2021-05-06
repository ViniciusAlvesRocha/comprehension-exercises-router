import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route exact path='/about'>
          <About />
        </Route>

        <Link to='/'>Home</Link>
        <br/>
        <Link to='/about'>About</Link>
        <br/>
        <Link to='/users'>Users</Link>
      </BrowserRouter>
    );
  }
}

export default App;
