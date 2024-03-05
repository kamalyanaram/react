import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false,
      }
    }
    
  render() {
    return this.state.isLoggedIn ? (
        <div>Hello Aram!</div>
    ) : (
        <div>Welcome guest!</div>
    )

    // let message 
    // if (this.state.isLoggedIn) {
    //     message = <div>Hello Aram!</div>
    // } else {
    //     message = <div>Welcome guest!</div>
    // }

    // return <div> {message} </div>

    // if (this.state.isLoggedIn) {
    //     return (
    //         <div>
    //           <div>Hello Aram!</div>
    //         </div>
    //       )
    // } else {
    //     return (
    //         <div>  
    //           <div>Welcome guest!</div>
    //         </div>
    //       )
    // }

    // return (
    //   <div>
    //     <div>Hello Aram!</div>
    //     <div>Welcome guest!</div>
    //   </div>
    // )
  }
}

export default UserGreeting
