import { SET_VISIBILITY_FILTER } from '../constants/ActionTypes'
import { SHOW_ALL } from '../constants/TodoFilters'

const visibilityFilter = (state = SHOW_ALL, {type, filter}) => {
  switch (type) {
    case SET_VISIBILITY_FILTER:
      return filter;
    default:
      return state
  }
}

export default visibilityFilter