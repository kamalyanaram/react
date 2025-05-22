import React from 'react'

function ChildComponent(props) {
  return (
    <div>
      <button onClick = {() => props.greetHandler('child')}> Greed parent </button>
    </div>
  )
}

export default ChildComponent
