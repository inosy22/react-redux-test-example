import { createStore } from 'redux'
import TodoReducer from './TodoReducer'

const initialState = {
  todos: [
    {id: 0, text: 'default todo 1'},
    {id: 1, text: 'default todo 2'},
  ],
}

const ConfigureStore = () => {
  const store = createStore(TodoReducer, initialState)
  return store
}
export default ConfigureStore
