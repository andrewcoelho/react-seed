import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../rootReducer';
import rootSaga from '../rootSaga';

const sagaMiddleware = createSagaMiddleware(rootSaga);

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(sagaMiddleware)
  );

  return store;
}
