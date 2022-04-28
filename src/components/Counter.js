import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  handleClick = () => {

    this.setState((prevState) => ({
        count: prevState.count + 1
    }))
  };

  incrementFive(){
      this.handleClick()
      this.handleClick()
      this.handleClick()
      this.handleClick()
      this.handleClick()
  }

  render() {
    return (
      <div>
        count: {this.state.count}
        <button onClick={() => this.incrementFive()}></button>
      </div>
    );
  }
}

export default Counter;
