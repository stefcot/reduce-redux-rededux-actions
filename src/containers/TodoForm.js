import TodoForm from 'components/TodoForm'
import { connect } from 'react-redux'
import { saveTodo } from 'actions/todos/async'
import { updateCurrent } from 'actions/todos/sync'

const mapStateToProps = (state) => ({
  currentTodo: state.todos.currentTodo
})

const mapDispatchToProps = { updateCurrent, saveTodo }

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)
