import React, { Component } from 'react'

export class ClassClick extends Component {
    clickHandler = () => {
        console.log('lox lyava');
    }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}><b>Click</b></button>
      </div>
    )
  }
}

export default ClassClick
