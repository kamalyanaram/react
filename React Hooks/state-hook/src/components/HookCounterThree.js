import React, { useState } from 'react';

function HookCounterThree() {
  const [name, setName] = useState({ firstName: '', lastName: '' });

  return (
    <div>
      <form action="">
        <input
          type="text"
          name=""
          id=""
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        />
        <input
          type="text"
          name=""
          id=""
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        />
        <h2>Your first name is - {name.firstName}</h2>
        <h2>Your last name is - {name.lastName}</h2>
        <h2>{JSON.stringify(name)}</h2>
      </form>
    </div>
  );
}

export default HookCounterThree;
