import ActionTypes from './ActionTypes'

export const addTodo = (id, text, completed) => {
  return {
    type: ActionTypes.ADD_TODO,
    payload: {
      id: id,
      text: text,
      completed: completed,
    }
  }
}

export const filterCompletedTodo = (showCompleted) => {
  return {
    type: ActionTypes.FILTER_COMPLETED_TODO,
    payload: {
      showCompleted: showCompleted,
    }
  }
}