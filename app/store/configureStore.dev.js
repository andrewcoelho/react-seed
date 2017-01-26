/* eslint-disable global-require */
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from 'reducers/root';
import rootSaga from 'sagas/root';

const sagaMiddleware = createSagaMiddleware();

export default (initialState) => {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(sagaMiddleware),
    ),
  );

  sagaMiddleware.run(rootSaga);

  if (module.hot) {
    // Enable webpack hot module replacement for reducers
    module.hot.accept('reducers/root', () => {
      const nextReducer = require('reducers/root').default;

      store.replaceReducer(nextReducer);
    });
  }

  return store;
};
