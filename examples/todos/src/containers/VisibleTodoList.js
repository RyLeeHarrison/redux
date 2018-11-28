import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'
import { VisibilityFilters } from '../actions'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(({completed}) => completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(({completed}) => !completed);
    default:
      throw new Error(`Unknown filter: ${filter}`)
  }
}

const mapStateToProps = ({todos, visibilityFilter}) => ({
  todos: getVisibleTodos(todos, visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
