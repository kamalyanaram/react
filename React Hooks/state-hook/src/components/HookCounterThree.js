import React, {useState} from 'react'

function HookCounterThree() {

  const [name, setName] = useState({firstName: '', lastName: ''})

  return (
    <div>
      <form action="">
        <input type="text" name="" id="" value={name.firstName} onChange={{e => setName}}/>
        <input type="text" name="" id="" />
        <h2>Your first name is - {name.firstName}</h2>
        <h2>Your last name is - {name.lastName}</h2>

      </form>
    </div>
  )
}

export default HookCounterThree

