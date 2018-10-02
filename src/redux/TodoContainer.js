import React, { Component } from 'react'
import { connect } from 'react-redux'
import TodoList from './TodoList'

class TodoContainer extends Component {
  render() {
    return <TodoList todos={this.props.todos}/>
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

function mapDispatchToProps(dispatch) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer)