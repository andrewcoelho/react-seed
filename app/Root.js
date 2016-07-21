import React from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import configureStore from './store/configureStore';
import routes from './rootRoute';

const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState);

export default () => (
  <Provider store={store}>
    <Router routes={routes} history={browserHistory} />
  </Provider>
);
