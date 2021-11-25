import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "./Loader";
import styled from "styled-components";

import { game, startGame } from "../reducers/game";

const StyledStart = styled.main`
    display: grid;
    grid-template-columns: 1fr;
    align-content: center;
	justify-items: center;
	gap: 10px;
    width: 320px;
    height: 400px;
    margin: 25% auto;
    border-radius: 5px;
    background-color: rgba(8, 7, 85, 0.36);
	/* background-image: url("./assets/maze.jpg");
	background-size: cover;
	background-repeat: no-repeat; */
`;

const StyledH1 = styled.h1`
    text-align: center;
`;

const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    gap: 20px;
`;

const StyledLabel = styled.label`
    display: grid;
    place-content: center;
    justify-items: center;
    gap: 10px;
	font-size: 18px;
`;

const StyledInput = styled.input`
    height: 30px;
    width: 200px;
    font-size: 28px;
    font-family: "Courier Prime", monospace;
`;
const StyledButton = styled.button`
    height: 40px;
    width: 240px;
    font-size: 28px;
    font-family: "Courier Prime", monospace;
    margin: auto;
`;

export const StartPage = () => {
    const [inputName, setInputName] = useState("");
    const username = useSelector((state) => state.game.username);
    const loading = useSelector((state) => state.ui.loading);

    const dispatch = useDispatch();

    const onInputNameChange = (event) => {
        event.preventDefault();
        dispatch(game.actions.setUsername(inputName));
    };

    const start = () => {
        dispatch(startGame(username));
        dispatch(game.actions.setGameStarted());
    };

    return (
        <StyledStart>
            {loading && <Loader />}
            {!username && (
                <>
                    <StyledH1>Welcome to the labyrinth</StyledH1>
					<img src="./assets/maze-icon.png" alt="maze"></img>
                    <StyledForm onSubmit={onInputNameChange}>
                        <StyledLabel>
                            Choose a username to start
                            <StyledInput
                                placeholder="username"
                                type="text"
                                value={inputName}
                                onChange={(event) =>
                                    setInputName(event.target.value)
                                }
                            />
                        </StyledLabel>
                        <StyledButton type="submit">Submit</StyledButton>
                    </StyledForm>
                </>
            )}
            {username && (<><h1>Are you ready?</h1><StyledButton onClick={start}>Enter</StyledButton></>)}
        </StyledStart>
    );
};
