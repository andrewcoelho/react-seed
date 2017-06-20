import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import configureStore from 'store/configureStore';

import Root from 'containers/Root';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact pattern="/" component={Root} />
      </div>
    </Router>
  </Provider>
);

export default App;
