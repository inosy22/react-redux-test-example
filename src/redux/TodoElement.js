import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TodoElement extends Component {
  render() {
    const { text, completed } = this.props
    return (
      <li>
        <span>{completed ? '済' : '未'}:&nbsp;</span>
        <span>{text}</span>
      </li>
    )
  }
}

TodoElement.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
}
