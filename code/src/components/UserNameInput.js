import React from 'react';

const userNameInput = () => {
  return (
    <div>
      <form>
        <label htmlFor="user-name-input">
        Enter name
          <input id="user-name-input" />
        </label>
        <button type="submit">Start game</button>
      </form>
    </div>
  )
}

export default userNameInput;