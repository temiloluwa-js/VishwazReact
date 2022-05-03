import React, { Component } from 'react'
import withCounter from './WithCounter'

export class HoverCounter extends Component {
  render() {
    const {count, incrementCount} = this.props
    return (
      <div>

        <button onClick={incrementCount}>Hovered {count} times {this.props.name}</button>
      </div>
    )
  }
}

export default withCounter(HoverCounter)