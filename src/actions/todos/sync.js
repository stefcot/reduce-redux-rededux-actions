// SYNC ACTION CREATOR FUNCTIONS
import { ADD_TODO, UPDATE_CURRENT, DELETE_TODO, LOAD_TODOS, REPLACE_TODO, SHOW_LOADER, HIDE_LOADER } from "./types";

export const updateCurrent = (val) => ({ type: UPDATE_CURRENT, payload: val })
export const initTodos = (todos) => ({ type: LOAD_TODOS, payload: todos })
export const addTodo = (todo) => ({ type: ADD_TODO, payload: todo })
export const replaceTodo = (todo) => ({ type: REPLACE_TODO, payload: todo })
export const removeTodo = (id) => ({ type: DELETE_TODO, payload: id })
export const showLoader = () => ({ type: SHOW_LOADER, payload: true })
export const hideLoader = () => ({ type: HIDE_LOADER, payload: false })
