import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import labyrinth, { startLabyrinth } from 'reducers/labyrinth';

const UserNameInput = () => {
  const dispatch = useDispatch()

  const [userName, setUserName] = useState('');
  console.log('userName', userName)
  console.log('setUserName', setUserName)
  // const author = useSelector((store) => store.questions.author);

  const onFormSubmit = (event) => {
    event.preventDefault();
    dispatch(labyrinth.actions.setUser(userName));
    dispatch(startLabyrinth());
  }

  return (
    <form onSubmit={(event) => onFormSubmit(event)}>
      <label htmlFor="author-input">Provide your name, please
        <input id="author-input" type="text" onChange={(event) => setUserName(event.target.value)} />
      </label>
      <button type="submit">Start the Maze!</button>
    </form>
  )
};

export default UserNameInput;

/* const handleOnFormSubmit = (event) => {
  event.preventDefault();

  const newTaskInfo = {
    id: uniqueID,
    taskDescription: newTask,
    isChecked: false,
    createdAt: moment().format('l')
  };

  dispatch(addTask(newTaskInfo));

  setNewTask('');
}; */