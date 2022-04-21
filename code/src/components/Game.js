import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getNextPosition } from '../reducers/game'
import styled from 'styled-components/macro'

// const NextStepSection = styled.section`
//     background-color: black;
//     color: lime;
//     font-size: 10px;
//     border: 1px solid grey;
//     padding: 10px;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     height: 100vh;
// `

/* const NextStepChild = styled.div`

height: 50%;
`
 */

const Container = styled.div`
  font-size: 10px;
  padding: 10px;
  background-color: black;
  color: lime;
  height: 100vh;
  padding-top: 20%;
  display: flex;
  flex-direction: column;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 15px;
  }
`

const HeadingOne = styled.h1`
  color: lime;
`

const HeadingTwo = styled.h2`
  padding:30px;
`

const Game = () => {

    const currentPosition = useSelector((state) => state.game.currentPosition)
    const userName = useSelector((state) => state.game.username)
    const isLoading = useSelector((state) => state.game.loading)

    const dispatch = useDispatch()

    const onAction = (actionDirection) => {
        dispatch(getNextPosition(actionDirection, userName))
    }

    return (
        <>
            {currentPosition && !isLoading &&(
                <Container>
                    <HeadingOne>{currentPosition.description}</HeadingOne>
                    {currentPosition.actions.map((action, index) => {
                        return (
                            <div key={index}>
                                <HeadingTwo>{action.description}</HeadingTwo>
                                <button onClick={() => onAction(action.direction)}>
                                    Go {action.direction}
                                </button>
                            </div>
                        )
                    })}
                </Container>
            )}
        </>

    )

}

export default Game