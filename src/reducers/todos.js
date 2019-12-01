import { CURRENT_UPDATE, LOAD_TODOS, ADD_TODO, REPLACE_TODO, DELETE_TODO } from 'actions/todos/types'

const initialState = {
  todos: [],
  currentTodo: ''
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
    case LOAD_TODOS:
      return {...state, todos: action.payload}
    case ADD_TODO:
      return {...state, currentTodo: '', todos: [...state.todos, ...[action.payload]]}
      // or return {...state, todos: state.todos.concat(action.payload)
    case REPLACE_TODO:
      return {...state,
        // if, in the list, an item has the same id as the passed payload, it gets replaced
        todos: state.todos.map((todo) => todo.id === action.payload.id ? action.payload : todo)
      }
    case DELETE_TODO:
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
