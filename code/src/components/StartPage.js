import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { labyrinth } from '../reducers/description';
import { fetchStart } from '../reducers/description';

export const StartPage = () => {
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(fetchStart());
  };

  const onInputChange = (event) => {
    dispatch(labyrinth.actions.setUsername(event.target.value));
  };

  return (
    <>
      <h1>Do you want to enter the labyrinth?</h1>
      <form onSubmit={onSubmit}>
        <label>
          <p>Write your name in the box below 👇</p>
          <input type="text" required onChange={onInputChange} />
        </label>
        <button>🗿 Lets do the labyrinth!</button>
        <h1>Look at the startPage.js</h1>
        {/* Jag har jobbat "från botten och upp" dvs har lagt in taggar osv för att info skall kunna synas på en "forstättningssida", den heter Descrition, kanske inte det bästa namnet, men namnet är med tanke på att en ny descrition visas för varje ledtråd. Det saknas en onButtonCklick på den sidan. Sedan tycker jag att vi skall göra en mostvarande sida som Jennie gjorde på lektionen som sorterar när start sidan skall visas och när descrition skall visas. Mitt i allt detta bör vi göra någon sjysst funktion som gör att the loading animation visas när sidan laddar.  */}
      </form>
    </>
  );
};
