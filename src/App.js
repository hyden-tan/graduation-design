import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import { HashRouter as Router } from 'react-router-dom';
import routes from './routes';
import store from './store';

class App extends Component {
  render() {
    return (
          <Router>
              <Provider store={store}>  
                {routes}
              </Provider>
          </Router>
    );
  }
}

export default App;
