import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }
  render() {
      return (
          this.state.isLoggedIn ? <div>Welcome VIshwas</div> : <div>Welcome Guests</div>
      )
    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome Vishwas</div>;
    // } else {
    //   message = <div>Welcome Guest</div>;
    // }

    // return <div>{message}</div>;
    //   if (this.state.isLoggedIn) {
    //       return (
    //           <div>Welcome Vishwas</div>
    //       )
    //   }else{
    //       return(
    //           <div>Welcome Guests</div>
    //       )
    //   }
    // return (
    //   <div>
    //       <div>Welcome Guests</div>
    //       <div>Welcome Vishwas</div>

    //   </div>
    // )
  }
}

export default UserGreeting;
