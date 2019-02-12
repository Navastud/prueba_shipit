import {createStore, applyMiddleware, compose} from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import promiseMiddleware from 'redux-promise-middleware';
import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(promiseMiddleware(), logger, sagaMiddleware),
  ),
);

sagaMiddleware.run(rootSaga);

export default store;
