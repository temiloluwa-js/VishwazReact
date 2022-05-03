import React from "react";

const withCounter = (WrappedComponent) => {
    class WithCounter extends React.Component{
        constructor(props) {
          super(props)
        
          this.state = {
             count: 0
          }
        }

        incrementCount = () => {
            const {count} = this.state
            this.setState({
                count: count + 1
            })
        }
        render(){
            return <WrappedComponent count={this.state.count} incrementCount={this.incrementCount}{...this.props}/>
        }
    }
    return WithCounter
}

export default withCounter