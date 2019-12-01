import TodoList from 'components/TodoList'
import { connect } from 'react-redux'
import { fetchTodos, toggleTodo, deleteTodo } from "actions/todos/async";
import { getVisibleTodos } from "reducers/todos";

const mapStateToProps = (state, ownProps) => ({
  todos: getVisibleTodos( state.todos.todos, ownProps.filter)
})

const mapDispatchToProps = { fetchTodos, toggleTodo, deleteTodo }

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
