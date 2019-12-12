import {
  UPDATE_CURRENT,
  LOAD_TODOS,
  ADD_TODO,
  REPLACE_TODO,
  DELETE_TODO,
  SHOW_LOADER,
  HIDE_LOADER
} from "actions/todos/types";
import { handleAction, combineActions } from "redux-actions";
import reduceReducers from "reduce-reducers";

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

//////////////////////////////////////// SPECIFIC REDUCER FUNCTION FOR EACH ACTION

/**
 * Specific reducer function for ADD_TODO action
 *
 * @type {function(...[*]=)}
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

/**
 * Specific reducer function for LOAD_TODOS action
 *
 * @type {function(...[*]=)}
 */
const loadTodosReducer = handleAction(
  LOAD_TODOS,
  (state, action) => {
    return { ...state, todos: action.payload };
  },
  initialState
);

/**
 * Specific reducer function for REPLACE_TODO action
 *
 * @type {function(...[*]=)}
 */
const replaceTodoReducer = handleAction(
  REPLACE_TODO,
  (state, action) => {
    return {
      ...state,
      // if, in the list, an item has the same id as the passed payload, it gets replaced
      todos: state.todos.map(todo =>
        todo.id === action.payload.id ? action.payload : todo
      )
    };
  },
  initialState
);

/**
 * Specific reducer function for DELETE_TODO action
 *
 * @type {function(...[*]=)}
 */
const deleteTodoReducer = handleAction(
  DELETE_TODO,
  (state, action) => {
    return {
      ...state,
      todos: state.todos.filter(todo => todo.id !== action.payload)
    };
  },
  initialState
);

/**
 * Specific reducer function for UPDATE_CURRENT action
 *
 * @type {function(...[*]=)}
 */
const updateCurrentReducer = handleAction(
  UPDATE_CURRENT,
  (state, action) => {
    return { ...state, currentTodo: action.payload };
  },
  initialState
);

/**
 * Specific reducer function for SHOW_LOADER action
 *
 * @type {function(...[*]=)}
 */
// const showLoaderReducer = handleAction(
//   SHOW_LOADER,
//   (state, action) => {
//     return { ...state, isLoading: action.payload };
//   },
//   initialState
// );

/**
 * Specific reducer function for HIDE_LOADER action
 *
 * @type {function(...[*]=)}
 */
// const hideLoaderReducer = handleAction(
//   HIDE_LOADER,
//   (state, action) => {
//     return { ...state, isLoading: action.payload };
//   },
//   initialState
// );

// COMBINED ACTIONS THAT DO THE SAME TREATMENT
const loaderReducer = handleAction(
  combineActions(SHOW_LOADER, HIDE_LOADER),
  (state, action) => {
    return { ...state, isLoading: action.payload };
  },
  initialState
);

// COMBINED REDUCER AND REDUCERS FUNCTIONS, ALSO CAN KEEP CLASSIC SWITCH BASED REDUCER
export default reduceReducers(
  loadTodosReducer,
  addTodoReducer,
  replaceTodoReducer,
  deleteTodoReducer,
  updateCurrentReducer,
  loaderReducer
);
