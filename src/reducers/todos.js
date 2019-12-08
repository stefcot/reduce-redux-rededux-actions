import {
  UPDATE_CURRENT,
  LOAD_TODOS,
  ADD_TODO,
  REPLACE_TODO,
  DELETE_TODO,
  SHOW_LOADER,
  HIDE_LOADER
} from "actions/todos/types";
import { handleAction } from "redux-actions";

const initialState = {
  todos: [],
  currentTodo: "",
  isLoading: false
};

export const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case "active":
      return todos.filter(t => !t.isComplete);
    case "completed":
      return todos.filter(t => t.isComplete);
    default:
      return todos;
  }
};

/**
 * Specific reducer function for ADD_TODO action
 *
 */
const addTodoReducer = handleAction(
  ADD_TODO,
  (state, action) => {
    return {
      ...state,
      currentTodo: "",
      todos: [...state.todos, ...[action.payload]]
    };
    // or return {...state, todos: state.todos.concat(action.payload)
  },
  initialState
);

////////////////////////////////////// REDUCER
export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_TODOS:
      return { ...state, todos: action.payload };
    case ADD_TODO:
      return addTodoReducer(state, action);
    case REPLACE_TODO:
      return {
        ...state,
        // if, in the list, an item has the same id as the passed payload, it gets replaced
        todos: state.todos.map(todo =>
          todo.id === action.payload.id ? action.payload : todo
        )
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    case UPDATE_CURRENT:
      return { ...state, currentTodo: action.payload };
    case SHOW_LOADER:
    case HIDE_LOADER:
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};
