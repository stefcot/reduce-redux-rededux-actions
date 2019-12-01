// Gives the JSX support
import React, {Component} from 'react'
import './TodoForm.css'
import { connect } from 'react-redux'
import { saveTodo } from 'actions/todos/async'
import { updateCurrent } from 'actions/todos/sync'

class TodoForm extends Component {

  handleInputChange = (evt) => {
    const val = evt.target.value
    this.props.updateCurrent(val)
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    this.props.saveTodo(this.props.currentTodo)
  }

  render() {
    const { currentTodo } = this.props

    return (
      <form
        className="todo-form"
        onSubmit={this.handleSubmit}
      >
        <input
          className="todo-input-add"
          value={currentTodo}
          onChange={this.handleInputChange}
          type={'text'}/>
        <button
          className="todo-button-add"
          type="submit"
        >Add</button>
      </form>
    )
  }
}

const mapStateToProps = (state) => ({
  currentTodo: state.todos.currentTodo
})

const mapDispatchToProps = { updateCurrent, saveTodo }

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)
