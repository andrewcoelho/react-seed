import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './rootRoute';
import configureStore from './store/configureStore';

const initialState = {};
const store = configureStore(initialState);

render(
  <Provider store={store}>
    <Router routes={routes} history={browserHistory} />
  </Provider>,
  document.getElementById('root')
);
