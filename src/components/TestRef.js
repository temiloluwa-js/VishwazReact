import React, { Component } from 'react'

class TestRef extends Component {
    constructor(props) {
      super(props)
      this.inputRef = React.createRef()
    }
  render() {
    return (
      <div>
          <label>{this.inputRef.current.value}</label>
          <input type="text" ref={this.inputRef} value=''/>
      </div>
    )
  }
}

export default TestRef