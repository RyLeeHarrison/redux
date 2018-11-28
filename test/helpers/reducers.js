import {
  ADD_TODO,
  DISPATCH_IN_MIDDLE,
  GET_STATE_IN_MIDDLE,
  SUBSCRIBE_IN_MIDDLE,
  UNSUBSCRIBE_IN_MIDDLE,
  THROW_ERROR
} from './actionTypes'

function id(state = []) {
  return (
    state.reduce((result, item) => (item.id > result ? item.id : result), 0) + 1
  )
}

export function todos(state = [], {type, text}) {
  switch (type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: id(state),
          text: text
        }
      ];
    default:
      return state
  }
}

export function todosReverse(state = [], {type, text}) {
  switch (type) {
    case ADD_TODO:
      return [
        {
          id: id(state),
          text: text
        },
        ...state
      ];
    default:
      return state
  }
}

export function dispatchInTheMiddleOfReducer(state = [], action) {
  switch (action.type) {
    case DISPATCH_IN_MIDDLE:
      action.boundDispatchFn()
      return state
    default:
      return state
  }
}

export function getStateInTheMiddleOfReducer(state = [], action) {
  switch (action.type) {
    case GET_STATE_IN_MIDDLE:
      action.boundGetStateFn()
      return state
    default:
      return state
  }
}

export function subscribeInTheMiddleOfReducer(state = [], action) {
  switch (action.type) {
    case SUBSCRIBE_IN_MIDDLE:
      action.boundSubscribeFn()
      return state
    default:
      return state
  }
}

export function unsubscribeInTheMiddleOfReducer(state = [], action) {
  switch (action.type) {
    case UNSUBSCRIBE_IN_MIDDLE:
      action.boundUnsubscribeFn()
      return state
    default:
      return state
  }
}

export function errorThrowingReducer(state = [], {type}) {
  switch (type) {
    case THROW_ERROR:
      throw new Error()
    default:
      return state
  }
}
