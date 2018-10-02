import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TodoElement from './TodoElement'

export default class TodoList extends Component {
  render() {
    const { todos } = this.props
    return (
      <ul>
        {todos.map(
          (todo) => (
            <TodoElement
              key={todo.id}
              text={todo.text}
            />
          )
        )}
      </ul>
    )
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired
}
