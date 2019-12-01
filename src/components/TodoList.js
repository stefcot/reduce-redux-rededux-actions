import React, {Component} from 'react'
import Todo from './Todo'
import './TodoList.css'
import {connect} from 'react-redux'
import { fetchTodos, toggleTodo, deleteTodo, getVisibleTodos } from "../reducers/todo";

class TodoList extends Component {

  componentDidMount() {
    this.props.fetchTodos()
  }

  render() {
    const {todos, toggleTodo, deleteTodo} = this.props
    return (
      <div className="todo-items">
        <ul className="todo-list">
          {todos.map((todo) => (
            <Todo
              key={todo.id}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
              {...todo} />
          ))}
        </ul>
      </div>
    )
  }
}


const mapStateToProps = (state, ownProps) => ({
  todos: getVisibleTodos( state.todo.todos, ownProps.filter)
})

const mapDispatchToProps = { fetchTodos, toggleTodo, deleteTodo }

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
