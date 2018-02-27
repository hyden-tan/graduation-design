import React, { Component } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import routes from './routes';

class App extends Component {
  render() {
    return (
        <Router>
            {routes}
        </Router>
    );
  }
}

export default App;
