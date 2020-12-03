import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { moves } from '../reducers/moves';
import { StartButton } from './StartButton';
import { 
    MainContainer,
    Text,
    PlayerInput,
    FormInput,
    ButtonWrapper,
    ButtonShape,
    Button,
} from '../styled-components/StartGame';

export const StartGame = () => {
    const dispatch = useDispatch();
    //UseSelector stores the username inputted by the user and when they click the button form is submitted and the addUsername is called which dispatches the username to the addUser reducer by way of the payload. This then updates the username in the initialstate
    const [ username, setUsername ] = useState("");

    //Accessing the username the user inputted and that was sent to the redux store and is being stored in the initialstate. This is then dispatched to the initialState thunk in reusable.js when the user presses the button to start the game
    const universalUsername = useSelector ((state) => state.moves.username);

    const addUsername = (event) => {
        event.preventDefault();
        dispatch(moves.actions.addUser(username));
        setUsername("");
    };

    //if username has been submitted by the user then navigate to the StartButton component
    if (universalUsername) { 
        return <StartButton /> 
    };

    return (
        <MainContainer>
            <Text>Welcome to the Rainbow Labyrinth! Please create your avatar</Text>
                <PlayerInput onSubmit={addUsername} id="startgame">
                    <FormInput 
                        type="text" 
                        placeholder="Type your avatar"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    >
                    </FormInput >
                    <ButtonWrapper>
                        <ButtonShape>
                            <Button type="submit" id="startgame">
                                ENTER
                            </Button>
                        </ButtonShape>
                    </ButtonWrapper>
                </PlayerInput> 
        </MainContainer>
    );
};