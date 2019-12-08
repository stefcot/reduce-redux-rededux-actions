// SYNC ACTION CREATOR FUNCTIONS
import { ADD_TODO, UPDATE_CURRENT, DELETE_TODO, LOAD_TODOS, REPLACE_TODO, SHOW_LOADER, HIDE_LOADER } from "./types";
import { createAction } from 'redux-actions'

// export const updateCurrent = (val) => ({ type: UPDATE_CURRENT, payload: val })
// export const initTodos = (todos) => ({ type: LOAD_TODOS, payload: todos })
// export const addTodo = (todo) => ({ type: ADD_TODO, payload: todo })
// export const replaceTodo = (todo) => ({ type: REPLACE_TODO, payload: todo })
// export const removeTodo = (id) => ({ type: DELETE_TODO, payload: id })
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

// reproduce the pattern where the action creator takes one argument to feed the payload action property
export const updateCurrent = createAction(UPDATE_CURRENT)
export const initTodos = createAction(LOAD_TODOS)
export const addTodo = createAction(ADD_TODO)
export const replaceTodo = createAction(REPLACE_TODO)
export const removeTodo = createAction(DELETE_TODO)

export const showLoader = () => ({ type: SHOW_LOADER, payload: true })
export const hideLoader = () => ({ type: HIDE_LOADER, payload: false })

