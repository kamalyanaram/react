import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './userContext'

export class ComponentE extends Component {
  static contextType = UserContext
	render() {
		return (
			<div>
        <div>Component E context {this.context}</div>
				<ComponentF />
			</div>
		)
	}
}

// ComponentE.contextType = UserContext
export default ComponentE
