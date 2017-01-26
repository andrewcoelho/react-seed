import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from 'reducers/root';
import rootSaga from 'sagas/root';

const sagaMiddleware = createSagaMiddleware(rootSaga);

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(sagaMiddleware),
  );

  return store;
}
