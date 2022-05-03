import React, { Component } from "react";

export class HoverCounterTwo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  };
  render() {
    const { count } = this.state;
    return (
      <button onMouseOver={this.incrementCount}>Hovered {count} times</button>
      
    );
  }
}

export default HoverCounterTwo;
