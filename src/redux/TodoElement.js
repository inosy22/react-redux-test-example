import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TodoElement extends Component {
  render() {
    const { text } = this.props
    return <li>{text}</li>
  }
}

TodoElement.propTypes = {
  text: PropTypes.string.isRequired
}
