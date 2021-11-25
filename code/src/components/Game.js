import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startThunk, actionThunk, game } from '../reducers/game'
//import { Welcome } from './Welcome'
//import { Endscreen } from './Endscreen'
import { LoadingIndicator} from "./LoadingIndicator"
import styled from "styled-components/macro"
import {ui} from'../reducers/ui'


const GameContainer = styled.section `
    display: flex;
    justify-content:center;`
const Body = styled.div `
    width: 70%;
    background-color: #1C362D;
    color: #23C757;
    font-family: 'VT323', monospace;
    justify-content:center;
    padding: 15px;
    
    `
const LoadWrapper = styled.div`
    display: flex;
    justify-content:center;`    

const ShortDesc= styled.div`
    border-bottom: dashed 2px;
    padding-bottom: 10px;`

const DescButtonWrapper = styled.div`
    display; flex;
    justify-content: center;
    border-bottom: dashed 2px;
    padding: 3px 0 10px 0;`
const Button = styled.button`
    margin: 10px auto;
    display: flex;
    `
const LongDesc =styled.div`
    `

export const Game = () => {
    const dispatch = useDispatch()
    const gameInformation = useSelector((store) => store.game)
    const loading = useSelector((store) => store.ui.isLoading);
    const showBeginning = useSelector((store) => store.ui.showBeginning);
    const [newUserName, setNewUserName] = useState('')
    //const [showBeginning, setShowBeginning] = useState(true)

    const onStart = () => {
        dispatch(ui.actions.setNoBeginning(false))
        dispatch(startThunk(newUserName))
        dispatch(game.actions.setUserName(newUserName))
        
        //setShowBeginning(false)
    } // a function to start the game and invoke the first Thunk whilst setting the username

    const onAction = (action) => {
        dispatch(actionThunk(newUserName, action))
    } // a function to continue the game, invoking the second thunk (and API), with user name and action arguments 

    return (
        <GameContainer>
       {loading && (
            <LoadWrapper><LoadingIndicator/></LoadWrapper>)}
            {showBeginning && (
                <form onSubmit={() => onStart()}>
                    <input
                        type="text" required
                        placeholder="Your User Name"
                        onChange={(event) => setNewUserName(event.target.value)}
                        value={newUserName}>
                    </input>
                    <button
                        type='submit'
                    >Start The Game </button>
                </form>
            )}

            {!showBeginning && (
                <Body>
                    <ShortDesc>{gameInformation.description}</ShortDesc>
                    
                    {gameInformation.actions.map((action) => (
                        <DescButtonWrapper>
                            <LongDesc key={action.description}>{action.description}</LongDesc>

                            <Button
                                key={action.coordinates}
                                onClick={() => onAction(action)}
                                disabled={loading}>
                                {action.type} {action.direction}
                            </Button>
                        </DescButtonWrapper>


                    ))}
                    {/*{gameInformation.actions.length === 0 && (
                        <div>
                          Congratulations, you have made it!
                        <button onClick={() => onAction()}> Press to re-start</button>
                        </div>
                        <Endscreen />
                    )}*/}

                </Body>

            )}
 

        </GameContainer>
    )
}