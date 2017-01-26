import React from 'react';
import { Provider } from 'react-redux';
import Router from 'react-router/BrowserRouter';
import Match from 'react-router/Match';
import configureStore from 'store/configureStore';

import Root from 'containers/Root';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Match exactly pattern="/" component={Root} />
      </div>
    </Router>
  </Provider>
);

export default App;
