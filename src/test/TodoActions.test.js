import ActionTypes from '../redux/ActionTypes'
import * as TodoActions from '../redux/TodoActions'

describe('TodoActionsTest', () => {
  test('TODO追加アクションオブジェクトが発行される', () => {
    const todo = {
      id: 1,
      text: 'test',
      completed: false,
    }
    const expected = {
      type: ActionTypes.ADD_TODO,
      payload: todo,
    }
    expect(TodoActions.addTodo(todo.id, todo.text, todo.completed)).toEqual(expected)
  })
})
