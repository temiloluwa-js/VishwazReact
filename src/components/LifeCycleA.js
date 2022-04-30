import React, { Component } from "react";
import { LifeCycleB } from "./LifeCycleB";

export class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Vishwas",
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleA getDerivedFromProps");
    return null;
  }

  componentDidMount() {
    console.log("component did mount");
  }
  render() {
    console.log("LifeCycleA render");
    return (
      <div>
        LifeCycleA
        <LifeCycleB />
      </div>
    );
  }
}

export default LifeCycleA;
