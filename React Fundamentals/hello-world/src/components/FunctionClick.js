import React from 'react'

function FunctionClick() {

    function clickHandler() {
        console.log('Byutation click handler');
    }
  return (
    <div>
      <button type="button" onClick={clickHandler}> CLick </button>
    </div>
  )
}

export default FunctionClick
