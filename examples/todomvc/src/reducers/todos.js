import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  COMPLETE_TODO,
  COMPLETE_ALL_TODOS,
  CLEAR_COMPLETED
} from '../constants/ActionTypes'

const initialState = [
  {
    text: 'Use Redux',
    completed: false,
    id: 0
  }
]

export default function todos(state = initialState, {type, text, id}) {
  switch (type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: state.reduce((maxId, {id}) => Math.max(id, maxId), -1) + 1,
          completed: false,
          text: text
        }
      ];

    case DELETE_TODO:
      return state.filter(({id}) => id !== id
      );

    case EDIT_TODO:
      return state.map(todo =>
        todo.id === id ?
          { ...todo, text: text } :
          todo
      );

    case COMPLETE_TODO:
      return state.map(todo =>
        todo.id === id ?
          { ...todo, completed: !todo.completed } :
          todo
      );

    case COMPLETE_ALL_TODOS:
      const areAllMarked = state.every(({completed}) => completed)
      return state.map(todo => ({
        ...todo,
        completed: !areAllMarked
      }))

    case CLEAR_COMPLETED:
      return state.filter(({completed}) => completed === false);

    default:
      return state
  }
}
