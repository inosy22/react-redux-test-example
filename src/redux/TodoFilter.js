import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TodoFilter extends Component {
  render() {
    const { showCompleted, onClickFilterButton } = this.props
    return (
      <div>
        <span>完了タスクを</span>
        <button onClick={onClickFilterButton}>
          { showCompleted ? '表示しない' : '表示する' }
        </button>
      </div>
    )
  }
}

TodoFilter.propTypes = {
  showCompleted: PropTypes.bool.isRequired,
  onClickFilterButton: PropTypes.func.isRequired,
}
