import React from 'react'
import { connect } from 'react-redux'
import configureStore from 'redux-mock-store'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import TodoContainer from '../redux/TodoContainer'
import * as TodoActions from '../redux/TodoActions'

// enzymeのreact16接続設定
configure({ adapter: new Adapter() })

describe('TodoContainerのConnect部分のテスト', () => {
  // Mock用のstate
  const mockState = {
    showCompleted: true,
    todos: [
      { id: 0, text: 'default todo 1', completed: false },
      { id: 1, text: 'default todo 2', completed: true },
    ],
  }
  // MockのStoreの作成
  const createMockStore = configureStore()
  const store = createMockStore(mockState)
  // MockStoreをconnectしながらshallowレンダリング
  const todoContainer = shallow(<TodoContainer store={store}/>)

  // mapStateToPropsのテスト
  test('showCompletedがpropsとして渡っている', () => {
    expect(todoContainer.props().showCompleted).toBe(true)
  })

  // mapDispatchToPropsのテスト（ActionCreatorと部分的な結合テスト）
  test('ActionCreatorのdispatchがpropsとして渡っている', () => {
    // mockのstoreに対して、actionのdispatch
    todoContainer.props().filterCompletedTodo(false)
    // dispatchされたActionオブジェクトの配列を取得
    const dispatchedActions = store.getActions()
    const expectedActions = [TodoActions.filterCompletedTodo(false)]
    expect(dispatchedActions).toEqual(expectedActions)
  })
})