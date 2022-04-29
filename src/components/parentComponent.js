import React, { Component } from 'react'
import ChildComponent from './childComponent'

class parentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName: 'Vishwas'   
      }

      this.greetHandler = this.greetHandler.bind(this)
    }

    greetHandler(childname){
        alert(`Hello ${this.state.parentName} from ${childname}`)
    }
  render() {
    return (
      <div>
        <ChildComponent greetParent={this.greetHandler}/>
      </div>
    )
  }
}

export default parentComponent