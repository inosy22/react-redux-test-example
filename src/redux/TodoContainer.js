import React, { Component } from 'react'
import { connect } from 'react-redux'
import TodoList from './TodoList'
import TodoFilter from './TodoFilter'
import * as TodoActions from './TodoActions'

class TodoContainer extends Component {
  render() {
    const { showCompleted, todos } = this.props
    return (
      <div>
        <TodoFilter
          showCompleted={showCompleted}
          onClickFilterButton={() => { this.props.filterCompletedTodo(!showCompleted)}} 
        />
        <TodoList
          showCompleted={showCompleted}
          todos={todos}
        />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    showCompleted: state.showCompleted,
    todos: state.todos,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    filterCompletedTodo: (showCompleted) => { dispatch(TodoActions.filterCompletedTodo(showCompleted)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer)
