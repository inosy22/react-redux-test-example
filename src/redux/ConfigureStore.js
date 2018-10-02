import { createStore } from 'redux'
import TodoReducer from './TodoReducer'
import * as TodoActions from './TodoActions'

const initialState = {
  showCompleted: true,
  todos: [
    { id: 0, text: 'default todo 1', completed: false },
    { id: 1, text: 'default todo 2', completed: true },
    { id: 3, text: 'default todo 3', completed: false },
    { id: 4, text: 'default todo 4', completed: true },
    { id: 5, text: 'default todo 5', completed: false },
    { id: 6, text: 'default todo 6', completed: true },
  ],
}

const ConfigureStore = () => {
  const store = createStore(TodoReducer, initialState)
  store.dispatch(TodoActions.addTodo(7, 'default todo 7', true))
  return store
}
export default ConfigureStore
