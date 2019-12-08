import TodoList from 'components/TodoList/index'
import { connect } from 'react-redux'
import { fetchTodos, toggleTodo, removeTodo } from "actions/todos/async";
import { getVisibleTodos } from "reducers/todos";

const mapStateToProps = (state, ownProps) => ({
  todos: getVisibleTodos( state.todos.todos, ownProps.filter)
})

const mapDispatchToProps = { fetchTodos, toggleTodo, removeTodo }

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
