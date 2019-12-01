import { getTodos, createTodo, updateTodo, destroyTodo } from "../lib/todoServices";
import {showMessage} from './message' // Import showMessage action creator

const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const initialState = {
  todos: [],
  currentTodo: ''
}

// Store actions types into constant to get an build error if there's some mistype
export const TODO_ADD = 'TODO_ADD'
export const TODOS_INIT = 'TODOS_INIT'
const CURRENT_UPDATE = 'CURRENT_UPDATE'
export const TODO_REPLACE = 'TODO_REPLACE'
export const TODO_DELETE = 'TODO_DELETE'

///////////////////////////////// SYNC ACTION CREATOR FUNCTIONS
export const updateCurrent = (val) => ({ type: CURRENT_UPDATE, payload: val })
export const initTodos = (todos) => ({ type: TODOS_INIT, payload: todos })
export const addTodo = (todo) => ({ type: TODO_ADD, payload: todo })
export const replaceTodo = (todo) => ({ type: TODO_REPLACE, payload: todo })
export const removeTodo = (id) => ({ type: TODO_DELETE, payload: id })

///////////////////////////////// ASYNC ACTION CREATOR FUNCTIONS
// POST: Redux thunk allows dispatch to be passed to the returned function
// here the response can be handled directly,
// because being the result it's a todo object
export const saveTodo = (name) => {
  return (dispatch) => {
    dispatch(showMessage('Saving new todo...'))
    createTodo(name)
      .then((res) => {
        console.log(res)
        dispatch(addTodo(res))
      })
  }
}

// GET: Redux thunk allows dispatch to be passed to the returned function, written using expression syntax
export const fetchTodos = () => {
  return (dispatch) => {
    dispatch(showMessage('Loading todos list...'))
    getTodos()
      .then((todos) => {
        dispatch(initTodos(todos))
      })
  }
}

// PUT: Async action creator for toggle complete,
// IMPORTANT: always use expression declaration
export const toggleTodo = (id) => {
  return async (dispatch, getState) => {
    dispatch(showMessage('Updating todo...'))
    const {todos} = getState().todo // namespace defined in the combineReducers
    const todo = todos.find((t) => t.id === id)
    const toggledTodo = {...todo, isComplete: !todo.isComplete}

    try {
      await sleep(1000);// some mock delay in the request
      // update service
      const res = await updateTodo(toggledTodo)
      dispatch(replaceTodo(res))
    } catch(err) {
      dispatch(showMessage('<span class="error">An error occured</span>'))
    }
  }
}

// DELETE: Async action creator for deleting item,
export const deleteTodo = (id) => {
  return (dispatch) => {
    dispatch(showMessage('Deleting todo...'))
    destroyTodo(id)
      .then((res) => {
        console.log(res)
        dispatch(removeTodo(id))
      })
  }
}

export const getVisibleTodos = (todos, filter) => {
  switch(filter) {
    case 'active':
      return todos.filter((t) => !t.isComplete)
    case 'completed':
      return todos.filter((t) => t.isComplete)
    default:
      return todos
  }
}

////////////////////////////////////// REDUCER
export default (state = initialState, action) => {
  switch (action.type) {
    case TODOS_INIT:
      return {...state, todos: action.payload}
    case TODO_ADD:
      return {...state, currentTodo: '', todos: [...state.todos, ...[action.payload]]}
      // or return {...state, todos: state.todos.concat(action.payload)
    case TODO_REPLACE:
      return {...state,
        // if, in the list, an item has the same id as the passed payload, it gets replaced
        todos: state.todos.map((todo) => todo.id === action.payload.id ? action.payload : todo)
      }
    case TODO_DELETE:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload )
      }
    case CURRENT_UPDATE:
      return {...state, currentTodo: action.payload}
    default:
      return state
  }
}
