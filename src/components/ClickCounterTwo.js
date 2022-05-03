import React, { Component } from 'react'

export class ClickCounterTwo extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    incrementCount = () => {
        const {count} = this.state
        this.setState({count: count + 1})
    }
  render() {
      const {count} = this.state
    return (
        <button onClick={this.incrementCount}>Clicked {count} times</button>
    )
  }
}

export default ClickCounterTwo