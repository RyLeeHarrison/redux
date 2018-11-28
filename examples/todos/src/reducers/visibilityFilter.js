import { VisibilityFilters } from '../actions'

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, {type, filter}) => {
  switch (type) {
    case 'SET_VISIBILITY_FILTER':
      return filter;
    default:
      return state
  }
}

export default visibilityFilter
