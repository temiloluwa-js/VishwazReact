import React, { Component } from 'react'
import RegularComponent from './RegularComponent'
import PureCompo from './PureComponent'
import MemoComponent from './MemoComponent'

class ParentComponent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      name: 'Vishwas'   
    }
  }

  componentDidMount(){
    setInterval(() => {this.setState({name: 'Vishwas'})}, 2000)
  }

  render() {
    console.log('Parent Component')
    return (
      <div>
        Parent Component
        <MemoComponent name={this.state.name}/>
        {/* <RegularComponent name={this.state.name}/>
        <PureCompo name={this.state.name}/> */}
      </div>
    )
  }
}

export default ParentComponent