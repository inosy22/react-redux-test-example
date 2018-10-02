import ActionTypes from './ActionTypes'

const TodoReducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TODO: 
      return Object.assign({}, state, {
        todos: [
          ...state.todos, 
          {
            id: action.payload.id,
            text: action.payload.text,
            completed: action.payload.completed,
          }
        ]
      })
    case ActionTypes.FILTER_COMPLETED_TODO:
      return Object.assign({}, state, {
        showCompleted: action.payload.showCompleted
      })
    default:
      return state
  }
}
export default TodoReducer