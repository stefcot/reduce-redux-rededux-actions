// SYNC ACTION CREATOR FUNCTIONS
// eslint-disable-next-line no-unused-vars
import { ADD_TODO, UPDATE_CURRENT, DELETE_TODO, LOAD_TODOS, REPLACE_TODO, SHOW_LOADER, HIDE_LOADER } from "./types";
//import { createAction } from 'redux-actions'
import { createActions } from 'redux-actions'

// export const updateCurrent = (val) => ({ type: UPDATE_CURRENT, payload: val })
// export const loadTodos = (todos) => ({ type: LOAD_TODOS, payload: todos })
// export const addTodo = (todo) => ({ type: ADD_TODO, payload: todo })
// export const replaceTodo = (todo) => ({ type: REPLACE_TODO, payload: todo })
// export const deleteTodo = (id) => ({ type: DELETE_TODO, payload: id })
// export const showLoader = () => ({ type: SHOW_LOADER, payload: true })
// export const hideLoader = () => ({ type: HIDE_LOADER, payload: false })

/* Flux Standard Action schema
{
  type: 'TYPE,
  payload: <any, object, array, boolean, etc ...>
  error: <boolean>, the action is an error action
  meta: <object> information about the action
}
 */

// Payload creator function passed to updateCurrent function
const fixeCase = (str) => {
  return str.split('').reduce((acc, val, idx) => {
    return idx === 0 ? val.toUpperCase() : `${acc}${val.toLowerCase()}`
  }, '')
}

// reproduce the pattern where the action creator takes one argument to feed the payload action property
// export const updateCurrent = createAction(UPDATE_CURRENT, fixeCase)
// export const loadTodos = createAction(LOAD_TODOS)
// export const addTodo = createAction(ADD_TODO)
// export const replaceTodo = createAction(REPLACE_TODO)
// export const deleteTodo = createAction(DELETE_TODO)

// For hard coded, payload value, we pass a payload function creator
// export const showLoader = createAction(SHOW_LOADER, () => true)
// export const hideLoader = createAction(HIDE_LOADER, () => false)

// By default, all action creators are accessible by a camelCase reference to them,
// which is the naming convention adopted before
export const {
  updateCurrent,
  loadTodos,
  addTodo,
  replaceTodo,
  deleteTodo,
  showLoader,
  hideLoader
} = createActions({
  UPDATE_CURRENT: fixeCase,
  SHOW_LOADER: () => true,
  HIDE_LOADER: () => false,
  // using an identity function as the payload creator, then,
  // for the meta creator, just destructuring the result and keeping name
  ADD_TODO: [x => x, (_, name)=>({name})],// passed to addTodo action creator
  LOAD_TODOS: [x => x, (_, name)=>({name})],// passed to loadTodos action creator
},
  REPLACE_TODO, // map other actions with no redefined payload creator
  DELETE_TODO
)
