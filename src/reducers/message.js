import { ADD_TODO, LOAD_TODOS, REPLACE_TODO, DELETE_TODO } from 'actions/todos/types';
import { MESSAGE_SHOW } from 'actions/message/types';

export default function(state='', action) {
  switch(action.type) {
    case MESSAGE_SHOW:
      return action.payload
    case ADD_TODO:
    case LOAD_TODOS:
    case REPLACE_TODO:
    case DELETE_TODO:
      return '' // or undefined, null
    default:
      return state
  }
}
