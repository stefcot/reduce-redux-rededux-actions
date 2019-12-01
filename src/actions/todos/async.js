import { getTodos, createTodo, updateTodo, destroyTodo } from "lib/services/todos";
import { initTodos, replaceTodo, addTodo, removeTodo } from "actions/todos/sync";
import { showMessage } from "actions/message/sync";

const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

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
    const {todos} = getState().todos // namespace defined in the combineReducers
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
