import { maze } from 'reducers/maze'

export const MakeMove = () => {
  return (dispatch, getState) => {
    dispatch(maze.actions.setLoading(true))
    fetch(
      'https://labyrinth.technigo.io/action',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: getState().maze.username,
          type: 'move',
          direction: getState().maze.chosenDirection
        })
      }
    )
      .then((res) => res.json())
      .then((location) => dispatch(maze.actions.setLocation({
        description: location.description,
        coordinates: location.coordinates,
        actions: location.actions
      })))
      .catch((error) => console.error(error))
      .finally(() => dispatch(maze.actions.setLoading(false)))
  }
}