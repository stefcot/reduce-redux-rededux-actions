import React, { Component } from 'react'
import Todo from 'components/Todo/index'
import styles from './TodoList.module.css'

class TodoList extends Component {

  componentDidMount() {
    this.props.fetchTodos()
  }

  render() {
    const { todos, toggleTodo, deleteTodo } = this.props
    return (
      <div className={styles['todo-items']}>
        <ul className={styles['todo-list']}>
          {todos.map((todo) => (
            <Todo
              key={todo.id}
              toggleTodo={ toggleTodo }
              deleteTodo={ deleteTodo }
              { ...todo } />
          ))}
        </ul>
      </div>
    )
  }
}

export default TodoList
