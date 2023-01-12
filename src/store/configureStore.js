import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas/rootSaga'
import { combineReducers } from 'redux';

import postsReducer from '../features/posts'

const rootReducer = combineReducers({
  posts: postsReducer
})

export default function configurateStore(intialState = {}) {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
  sagaMiddleware.run(rootSaga)
  return store
}