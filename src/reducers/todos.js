/* eslint-disable no-unused-vars */
import {
  UPDATE_CURRENT,
  LOAD_TODOS,
  ADD_TODO,
  REPLACE_TODO,
  DELETE_TODO,
  SHOW_LOADER,
  HIDE_LOADER
} from "actions/todos/types";
import { handleActions, combineActions } from "redux-actions";

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

// ALL ACTIONS HANDLERS ARE NOW COMBINED INTO ONE REDUCER,
// NOW A CLASSIC REDUCER CANNOT BE COMBINED
export default handleActions(
  {
    UPDATE_CURRENT: (state, action) => {
      return { ...state, currentTodo: action.payload };
    },
    [combineActions(SHOW_LOADER, HIDE_LOADER)]: (state, action) => {
      return { ...state, isLoading: action.payload };
    },
    ADD_TODO: (state, action) => {
      return {
        ...state,
        currentTodo: "",
        todos: [...state.todos, ...[action.payload]]
      };
    },
    LOAD_TODOS: (state, action) => {
      return { ...state, todos: action.payload };
    },
    REPLACE_TODO: (state, action) => {
      return {
        ...state,
        // if, in the list, an item has the same id as the passed payload, it gets replaced
        todos: state.todos.map(todo =>
          todo.id === action.payload.id ? action.payload : todo
        )
      };
    },
    DELETE_TODO: (state, action) => {
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    }
  },
  initialState
);
