import snapshotDiff from 'snapshot-diff'
import TodoReducer from '../redux/TodoReducer'
import ActionTypes from '../redux/ActionTypes'

const defaultState = {
  showCompleted: false,
  todos: [],
}

describe('TodoReducerTest', () => {
  test('', () => {
    const action = {
      type: ActionTypes.ADD_TODO,
      payload: {
        id: 1,
        text: 'test',
        completed: false,
      }
    }
    expect(
      snapshotDiff(defaultState, TodoReducer(defaultState, action))
    ).toMatchSnapshot()
  })
})