import React, { Component } from 'react';
import currencies from '../src';

class App extends Component {
  render() {
    return (
      <div>
        {JSON.stringify(currencies)}
      </div>
    );
  }
}

export default App;
