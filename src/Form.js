import React, { Component } from 'react'

export default class Form extends Component {
  render() {
    return (
      <button className="clicker" onClick={() => this.props.handleClick()}>
        Click me
      </button>
    )
  }
}
