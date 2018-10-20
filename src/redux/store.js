import {
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux'

import logger from 'redux-logger'

import * as reducers from './ducks'

const rootReducer = combineReducers(reducers)

const store = createStore(
  rootReducer,
  applyMiddleware(logger),
)

export default store
