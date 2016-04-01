import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../rootReducer';
import rootSaga from '../rootSaga';

const sagaMiddleware = createSagaMiddleware(rootSaga);

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(sagaMiddleware),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../rootReducer', () => {
      const nextReducer = require('../rootReducer').default;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
