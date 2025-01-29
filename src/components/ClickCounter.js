import React, { Component } from 'react'

export class ClickCounter extends Component {
  constructor(props) {
    super(props)

    this.state = {
       count: 0
    }
  }

  incrementCount = () => {
    this.setState(prevState => {
      return { count: prevState.count }
    })
  }
  render() {
    return (
      <button onClick={this.incrementCount}>CLicked X times</button>
    )
  }
}

export default ClickCounter
