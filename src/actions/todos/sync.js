// SYNC ACTION CREATOR FUNCTIONS
import { ADD_TODO, CURRENT_UPDATE, DELETE_TODO, LOAD_TODOS, REPLACE_TODO } from "./types";

export const updateCurrent = (val) => ({ type: CURRENT_UPDATE, payload: val })
export const initTodos = (todos) => ({ type: LOAD_TODOS, payload: todos })
export const addTodo = (todo) => ({ type: ADD_TODO, payload: todo })
export const replaceTodo = (todo) => ({ type: REPLACE_TODO, payload: todo })
export const removeTodo = (id) => ({ type: DELETE_TODO, payload: id })
