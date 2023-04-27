import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAction } from 'reducers/labyrinth'
import styled from 'styled-components/macro'

const Directions = () => {
  const actions = useSelector((store) => store.labyrinth.actions)
  const [isActive, setActive] = useState(false)

  const dispatch = useDispatch()

  const toggleDisplay = () => {
    setActive(!isActive);
  }

  return (
    <> 
    <Direction>
      <DirectionBtn1 className={isActive ? null : 'instructions-btn'} type="button" onClick={toggleDisplay}>Click here to see directions</DirectionBtn1>
      {actions.map((action) => {
        return (
          <div>
          <DirectionText className={isActive ? 'hidden-instructions' : 'instructions'}>
            {action.description}</DirectionText>
            <DirectionBtn2 type="button" key={action.direction} onClick={() => dispatch(getAction(action.type, action.direction))}> Go {action.direction}</DirectionBtn2>
            </div>
        )
      })}
    </Direction>
    </>
  )
}

export default Directions

const Direction = styled.div`
// flex-direction: column;


const DirectionText = styled.div`

&.instructions {
  border-radius: 10px;
  margin-top: 1rem;
  padding: 10px 5px;
  width: 100%;
  animation: fadeIn 1s;
}

@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

&.hidden-instructions {
  display: none;
}

.p {
  overflow-wrap: break-word;
}
`
const DirectionBtn1 = styled.button`
background: blue;
color: white;
padding: 10px 20px;
border-radius: 5px;
border: none;
margin-right: 10px;
margin-top: 10px;
cursor: pointer;
transition: 0.3s ease-in-out;

&:hover {
  transform: scale(1.05);
  background: darkblue;
}
`