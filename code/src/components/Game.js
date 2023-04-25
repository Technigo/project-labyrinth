import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchTwo } from 'reducers/gameFetch'

export const Game = () => {
/*   const userInfo = useSelector((store) => store.gameFetch.userName) */
  const gameData = useSelector((store) => store.gameFetch)
  const gameActions = useSelector((store) => store.gameFetch.actions)
  /*   const [userType, setUserType] = useState('')
  const [userDirection, setUserDirection] = useState('') */
  console.log(gameData);

  const dispatch = useDispatch();

  return (
    <div>
      <p>Hello {gameData.userName}</p>
      <p>{gameData.description}</p>
      {gameActions && gameActions.map((item) => {
        return (
          <div key={item.direction}>
            <p>{item.description}</p>
            <button
              direction={item.direction}
              type="button"
              onClick={() => dispatch(fetchTwo(item.direction))}>
              {item.direction}
            </button>
          </div>
        );
      })}
    </div>
  )
}

