const BASE_URL = process.env.REACT_APP_BASE_URL

/**
 * Gets all todos at app start
 *
 * @return {Promise<any>}
 */
export const getTodos = () => {
  return fetch(BASE_URL)
    .then((res) => {
      return res.json()
    })
}

/**
 * Posts a todo item
 *
 * @return {Promise<any>}
 */
export const createTodo = (name) => {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      isComplete: false
    })
  }).then((res) => res.json())
}

/**
 * Posts a todo item
 *
 * @return {Promise<any>}
 */
export const updateTodo = (todo) => {
  return fetch( `${BASE_URL}/${todo.id}`, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(todo)
  }).then((res) => res.json())
}


/**
 * Posts a todo item
 *
 * @return {Promise<any>}
 */
export const destroyTodo = (id) => {
  return fetch( `${BASE_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).then((res) => res.json())
}
