import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import reducers from './Reducers';
import sagas from './Sagas';

const logger = createLogger ();
const sagaMiddleware = createSagaMiddleware ();

const middleware = applyMiddleware (logger, sagaMiddleware);

const store = createStore (reducers, middleware);

sagaMiddleware.run (sagas);

export default store;
