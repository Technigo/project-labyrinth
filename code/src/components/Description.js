import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import games, { generateMove } from '../reducers/games'


const Description = () => {
  const ourUserName = useSelector(store => store.games.username)
  const test = useSelector(store => store.games.description)
  const test2 = useSelector(store => store.games.actions)
  console.log(test)
  const userActions = useSelector(store => store.games.description.actions)
  //console.log(userActions)
  //const theDescription = useSelector(store => store.games.description)

  //console.log(theDescription)
  //console.log(ourUserName)
  //console.log(ourUserNameTest)
  //const games = useSelector(store => store.games.description.actions)
  //const acct = useSelector(store => store.games.ourActions[0])

  const dispatch = useDispatch()

/*   const onGameDirection = (directionTag) => {
    dispatch(generateMove(directionTag))
} */



  return (
    <>
    
        <div>
          <button 
            type='button'
            onClick={() => dispatch(generateMove(ourUserName, test2.direction)) }
          >west</button>
           <button 
            type='button'
            onClick={() => dispatch(generateMove(ourUserName, test2.direction)) }
          >east</button>
          
     {/*      <p>Funkar detta? {theDescription.description}</p>
          <p>Testa {theDescription.coordinates}</p>
          <p>Testa {theDescription.direction}</p> */}
        </div>
     
    </>
  )
}

export default Description