import { createSelector } from 'reselect'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilters'

const getVisibilityFilter = ({visibilityFilter}) => visibilityFilter
const getTodos = ({todos}) => todos

export const getVisibleTodos = createSelector(
  [getVisibilityFilter, getTodos],
  (visibilityFilter, todos) => {
    switch (visibilityFilter) {
      case SHOW_ALL:
        return todos
      case SHOW_COMPLETED:
        return todos.filter(({completed}) => completed);
      case SHOW_ACTIVE:
        return todos.filter(({completed}) => !completed);
      default:
        throw new Error(`Unknown filter: ${visibilityFilter}`)
    }
  }
)

export const getCompletedTodoCount = createSelector(
  [getTodos],
  todos => (
    todos.reduce((count, {completed}) => completed ? count + 1 : count,
      0
    )
  )
)