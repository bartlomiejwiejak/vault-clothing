import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './root-reducer';
import rootSaga from './root-saga';

const sagaMiddleware = createSagaMiddleware();

const middleWares = [sagaMiddleware];

export const store = createStore(rootReducer, applyMiddleware(...middleWares))

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)