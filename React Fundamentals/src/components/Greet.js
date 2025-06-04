import React from 'react'

// function Greet(){
//     return <h1>Hello Baby</h1>
// }

export const Greet = ({name, heroName}) => {
    return (
        <div>
            <h1>
                Hello Baby {name} aka {heroName}
            </h1>
        </div>
    )
}

export default Greet