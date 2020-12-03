import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { moves } from "../reducers/moves";
import StartButton from './StartButton';

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* filter: blur(8px); */
    background-color: rgba(255, 255, 255, 0.5);
    padding: 20px;
    font-family: 'Raleway', sans-serif;
    font-size: 22px;
    text-align: center;
`;

const Text = styled.p`
    color: hotpink;
`;

const PlayerInput = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const FormInput = styled.input`
    background-color: transparent;
    border: none;
    border-bottom: 3px solid white;
    padding: 10px;
    width: 250px;
    height: 50px;
    margin-bottom: 10px;
    font-family: 'Raleway', sans-serif;
    font-size: 20px;
    color: hotpink;
    &::-webkit-input-placeholder {
        font-size: 22px;
        font-family: 'Raleway', sans-serif;
        color: #ffc16b;
        font-weight: bold;
        text-align: center;
    };
`;

const ButtonWrapper = styled.div`
    margin: auto;
    display: flex;
    text-align: initial;
    width: 150px;
    height: 150px;
    cursor: pointer;
`;

const ButtonShape = styled.div`   
    position: relative;
    width: 46%;
    height: 80%;
    margin: auto;
    color: white;
    background: linear-gradient(-180deg, white, #f4dbb8);
    display: flex;
    align-content: center;
    justify-content: center;
    transition: 0.5s;
    &:before, &:after {
        position: absolute;
        content: "";
        background: inherit;
        height: 100%;
        width: 100%;
        border-radius: 0;
        transition: 0.5s;
        transform-origin: center;
    }
    &:before {
        transform: rotateZ(60deg);
    }
    &:after {
        transform: rotateZ(-60deg);
    }
    &:hover {
        border-radius: 50px;
        transition: 0.5s;
    }
    &:hover:before {
        border-radius: 50px;
        transition: 0.5s;
    }
    &:hover:after {
        border-radius: 50px;
        transition: 0.5s;
    }
`;

const Button = styled.button`
    border: none;
    z-index: 1;
    margin: auto;
    font-size: 30px;
    font-family: 'Mystery Quest', cursive;
    color:  #ffc16b;
    background-clip: text;
    -webkit-background-clip: text;
`;


const MoveControls = () => {
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
            <Text>Welcome to Labyrinth! Please create your avatar</Text>
                <PlayerInput onSubmit={addUsername} id="startgame">
                    <FormInput 
                        type="text" 
                        placeholder="Enter your avatar"
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

export default MoveControls;