/* eslint-disable linebreak-style */
import React from "react";
import { useDispatch } from 'react-redux';
import  Labyrinth  from './Labyrinth'
import  StartPage  from './StartPage'
import { game } from 'reducers/store'

export const LogIn = () => {
    const dispatch = useDispatch
    const userName = () => {
        dispatch(game.actions.username)
    }
    const continueQuest = () => {
        return(<Labyrinth />)
    }

    const newGame = () => {
        window.location.reload();
    }
    // FUNCTION TO USE AS A TRIGGER IN "reactjs-popup"

    // const popUpTrigger = () => {
    //     console.log('trigger', popUpTrigger)
    //     return (
    //         coordinates > '0,0' 
    //     )
    // }
    
    return(
          <>
            <div>
                <h2>'Welcome back'</h2>
                <h3>'Would you like to start your journey when you left or from the beginning?'</h3>
            </div>
            <div>
                <button onClick={continueQuest}>Continue game</button>
                <button onClick={newGame}>Start new game</button>
            </div>
       </>
        
    )
}

//  ANOTHER APROACH TO MAKE POP UP BY USING REACT LIBRARY "reactjs-popup"
    // <StyledLogIn>
    //     <Popup trigger={popUpTrigger}>
    //     <div>
    //         <h2>'Welcome back'</h2>
    //         <h3>'Would you like to start your journey when you left or from the beginning?'</h3>
    //         <div>
    //                <button onClick={continueQuest}>Continue game</button><button onClick={newGame}>Start new game</button>
    //         </div>
    //     </div>
    //     </Popup>
    // </StyledLogIn>