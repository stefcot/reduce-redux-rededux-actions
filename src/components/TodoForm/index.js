import React, {Component} from 'react'
import styles from './TodoForm.module.css'

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
        className={styles['todo-form']}
        onSubmit={this.handleSubmit}
      >
        <input
          className={styles['todo-input-add']}
          value={currentTodo}
          onChange={this.handleInputChange}
          type={'text'}/>
        <button
          className={styles['todo-button-add']}
          type="submit"
        >Add</button>
      </form>
    )
  }
}

export default TodoForm
