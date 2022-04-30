import React, { Component } from "react";

class Form extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         username: '',
         topic: 'React'
      }
    }

    handleuserNameChange = (event) => {
        this.setState({username: event.target.value})
    }

    handletopicChange = (event) => {
        this.setState({topic: event.target.value})
    }

  render() {
    return <form action="">
        <div>
            <p>{this.state.username}</p>
            <label>Username</label>
            <input value={this.state.username} type="text" onChange={this.handleuserNameChange}/>
        </div>
        <div>
            <label>Comment</label>
            <textarea onChange={this.handleuserNameChange}></textarea>
        </div>
        <div>
            <select value={this.state.topic}>
                <option value="React">React</option>
                <option value="Angular">Angular</option>
                <option value="Vue">Vue</option>
            </select>
        </div>
        <button type="submit"></button>
    </form>;
  }
}

export default Form;
