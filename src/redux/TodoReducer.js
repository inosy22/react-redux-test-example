import ActionTypes from './ActionTypes'

const TodoReducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TODO: 
      return {
        id: action.payload.id,
        text: action.payload.text,
      }
      default:
        return state
  }
}
export default TodoReducer