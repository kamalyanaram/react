import React from "react"

const Hello = () => {
    // return (
    //     <div>
    //         <h1>Hello Brooo</h1>
    //     </div>
    // )

    return React.createElement(
        'div',
        { id:'component', className: 'dummyClass'},
        React.createElement('h1', null,'Hello Brooo')
    )
}

export default Hello