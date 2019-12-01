import React, { Component } from 'react'
import Todo from 'components/Todo/index'
import './TodoList.css'

class Index extends Component {

  componentDidMount() {
    this.props.fetchTodos()
  }

  render() {
    const { todos, toggleTodo, deleteTodo } = this.props
    return (
      <div className="todo-items">
        <ul className="todo-list">
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

export default Index
