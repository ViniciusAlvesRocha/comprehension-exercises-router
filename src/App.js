import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact
          path='/users/:id'
          component={ Users } />

          <Route exact path='/'>
            <Home greetingMessage='Good Morning'/>
          </Route>

          <Route exact path='/about'>
            <About />
          </Route>
        </Switch>

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
