import {createStore, applyMiddleware, compose, combineReducers} from "redux";
import thunk from 'redux-thunk' // for asynchronous action

import todoReducer from './reducers/todo'
import messageReducer from './reducers/message'

// create some namespaced combination
const reducer = combineReducers({
  todo: todoReducer,
  message: messageReducer
})

const enhancer = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
)

export default createStore(reducer, /* preloadedState, */ enhancer)
