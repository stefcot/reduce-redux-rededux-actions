import { ADD_TODO, LOAD_TODOS, REPLACE_TODO, DELETE_TODO } from 'actions/todos/types';
// eslint-disable-next-line no-unused-vars
import { MESSAGE_SHOW } from 'actions/message/types';
import { handleActions, combineActions } from 'redux-actions'

const initialState = {
  text: ''
}

const reducer = handleActions({
  [combineActions(ADD_TODO, LOAD_TODOS, REPLACE_TODO, DELETE_TODO)]: {
    next:(state) => {
      return { ...state, text: '' };
    },
    throw: (state,action) => ({
      ...state, text: action.payload.message
    })
  },

  MESSAGE_SHOW: (state,action) => ({
    ...state, text: action.payload
  })

}, initialState)

export default reducer
