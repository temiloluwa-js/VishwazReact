import React, { Component } from 'react'

export class LifeCycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        name: 'Vishwas'
      }
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifecycleB getDerivedFromProps')
        return null
    }

    componentDidMount(){
        console.log('component did mount')
    }
  render() {
      console.log('LifeCycleB render')
    return (
      <div>LifeCycleB</div>
    )
  }
}

export default LifeCycleB