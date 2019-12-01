import {TODO_ADD, TODOS_INIT, TODO_REPLACE, TODO_DELETE} from './todo'; // reducers can commonly treat actions

const MESSAGE_SHOW = 'MESSAGE_SHOW'

export const showMessage = (msg) => ({type: MESSAGE_SHOW, payload: msg})

export default function(state='', action) {
  switch(action.type) {
    case MESSAGE_SHOW:
      return action.payload
    case TODO_ADD:
    case TODOS_INIT:
    case TODO_REPLACE:
    case TODO_DELETE:
      return '' // or undefined, null
    default:
      return state
  }
}
