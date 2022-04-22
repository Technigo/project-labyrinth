import React from 'react'
import { useSelector, useDispatch} from "react-redux";
import { fetchGameSteps } from '../reducers/game';

import { useNavigate } from 'react-router-dom';
import { MainGameStyle, DirectionSection, WinSection, DirectionButton, InfoSection } from "./Style"

const MainGame = () => {
    const gameObject = useSelector((store) => store.game.gameObject)
    const username = useSelector((store) => store.game.username)
    const loading = useSelector((state) => state.ui.loading)
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const onRestartClick = () => {
        navigate('/')
    }


    return (         
        <div>
           
            {!loading && (

            <MainGameStyle>

            <InfoSection className="nes-container with-title is-centered">
            <p className="title" tabIndex='0'>User: {username} </p>
            <p tabIndex='0'>{gameObject.description}</p>
            </InfoSection>

            <DirectionSection className="nes-container with-title is-centered">
            {gameObject.actions.length > 0 && (
                <div>
                {gameObject.actions.map((action) => {
                    return(

                        <div key={action.direction}>
                        <p tabIndex='0'>{action.description}</p>
                    
                        <DirectionButton
                            type="button" 
                            className="nes-btn is-warning"
                            tabIndex='0'
                            onClick={() => {
                                dispatch(fetchGameSteps({ direction: action.direction }))
                            }}
                        >

                            <span>
                                Go {''}
                                {action.direction +
                                (action.direction === 'North'
                                    ? ' '
                                    : action.direction === 'South'
                                    ? ''
                                    : action.direction === 'West'
                                    ? ''
                                    : action.direction === 'East'
                                    ? ''
                                    : '')}
                            </span>
                        </DirectionButton>
                    </div>
                    )
                    
                    })}
                </div>
            )}


            {gameObject.coordinates === "1,3" && (
                <WinSection>
                    <h3>You won!</h3>
                    <button 
                        type="button" 
                        class="nes-btn is-success"
                        tabIndex='0'
                        onClick={onRestartClick}>
                        Restart{' '}
                    </button>
                </WinSection>
            )}
            </DirectionSection>

            </MainGameStyle>


            )}
        </div>
    )
}

export default MainGame