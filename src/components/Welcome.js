import React, { Component } from "react";

class Welcome extends Component {
    render() {
        const {name, children} = this.props;
        return (
            <h1>
                Welcome {name} <br /> {children}
            </h1>
        )
    }
}

export default Welcome;