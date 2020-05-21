import React, { Component } from 'react';
import { Route } from 'react-router';
import { Home } from './components/Home';
import { ValueContextComponent } from './ValueContext';

export default class App extends Component {

  render() {
    return (
      <ValueContextComponent>
         <Route exact path='/' component={Home} />
      </ValueContextComponent>
    );
  }
}
