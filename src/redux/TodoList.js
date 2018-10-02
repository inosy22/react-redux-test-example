import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TodoElement from './TodoElement'

export default class TodoList extends Component {
  render() {
    const { todos, showCompleted } = this.props
    return (
      <ul>
        {todos.map(
          (todo) => (
            (showCompleted || !todo.completed) ?
              (<TodoElement key={todo.id} text={todo.text} completed={todo.completed}/>) : ''
          )
        )}
      </ul>
    )
  }
}

TodoList.propTypes = {
  showCompleted: PropTypes.bool.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired).isRequired
}
