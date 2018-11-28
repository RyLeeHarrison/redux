import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(({completed}) => completed);
    case 'SHOW_ACTIVE':
      return todos.filter(({completed}) => !completed);
    default:
      throw new Error(`Unknown filter: ${filter}`)
  }
}

const mapStateToProps = ({todos, visibilityFilter}) => ({
  todos: getVisibleTodos(todos.present, visibilityFilter)
})

const mapDispatchToProps = ({
  onTodoClick: toggleTodo
})

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
