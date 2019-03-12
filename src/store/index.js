import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import Reactotron from 'reactotron-react-js';

import reducers from './reducers';
import sagas from './sagas';

const middlewares = [];

const sagaMonitor = Reactotron.createSagaMonitor();

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

middlewares.push(sagaMiddleware);

const tronMiddleware = process.env.NODE_ENV === 'development' ? console.tron.createEnhancer : () => {};

const store = createStore(
  reducers,
  compose(
    tronMiddleware(),
    applyMiddleware(...middlewares),
  ),
);

sagaMiddleware.run(sagas);

export default store;
