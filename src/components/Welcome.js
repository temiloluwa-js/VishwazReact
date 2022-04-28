import React, {Component} from "react";

class Welcome extends Component{
    constructor(){
        super()

        this.state = {
            message: 'Welcome Visitor'
        }
    }
    render(){
        const {name, heroName} = this.props

        return <h1>{name} and {heroName}</h1>
    }
}

export default Welcome