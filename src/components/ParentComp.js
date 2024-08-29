import React, { Component, PureComponent } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'
import MemoComp from './MemoComp'

export class ParentComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
           name: 'Aram'
        }
      }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Vishi'
            })
        }, 2000)
    }


    render() {
        console.log('************Parent Comp Render*****************')
        return (
        <div>
            ParentComp
            <MemoComp name={this.state.name}/>
            {/* <RegComp name={this.state.name}/>
            <PureComp name={this.state.name}/> */}
        </div>
        )
    }
}

export default ParentComp