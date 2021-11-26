import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "./Loader";
import styled from "styled-components";

import { nextStep } from "../reducers/game";
import { TextContainer } from "./TextContainer";
import { LocationBackground } from "./LocationBackground";

const Container = styled.main`
    padding: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow: scroll;
    @media (min-width: 768px) {
        width: 500px;
    }
`;

const HeadingContainer = styled.div`
    box-sizing: border-box;
    padding: 25px 30px;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 10px;
    margin: 10px;
    > * {
        margin: 0;
        padding: 0;
    }
    width: 300px;
    @media (min-width: 768px) {
        width: 500px;
    }
`;

const Heading = styled.h1`
    font-size: 22px;
`;

const Keyboard = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 75%;
    margin-top: 15px;
    margin-bottom: 20px;
    > * {
        margin: 0;
        padding: 0;
    }
    @media (min-width: 768px) {
        width: 300px;
        position: absolute;
        bottom: 50px;
    }
`;

const KeyButton = styled.button`
    grid-column: span 1;
    background: none;
    border: none;
    margin: 1px 3px;
`;

const EmptySpace = styled.div`
    grid-column: span 1;
`;

const ImageButton = styled.img`
    width: 100%;
`;

export const GamePlay = () => {
    const dispatch = useDispatch();
    const currentPosition = useSelector((state) => state.game.currentPosition);
    const loading = useSelector((state) => state.ui.loading);

    return (
        <LocationBackground coordinates={currentPosition?.coordinates}>
            <>
                {loading && <Loader />}
                {currentPosition && (
                    <Container>
                        <HeadingContainer>
                            <Heading>{currentPosition.description}</Heading>
                        </HeadingContainer>
                        {currentPosition.actions?.map((move) => (
                            <TextContainer move={move} />
                        ))}

                        <Keyboard>
                            <EmptySpace></EmptySpace>
                            <KeyButton
                                onClick={() => dispatch(nextStep("North"))}
                            >
                                <ImageButton
                                    src={"./assets/key_up.png"}
                                    alt="North"
                                />
                            </KeyButton>
                            <EmptySpace></EmptySpace>
                            <KeyButton
                                onClick={() => dispatch(nextStep("West"))}
                            >
                                <ImageButton
                                    src={"./assets/key_left.png"}
                                    alt="West"
                                />
                            </KeyButton>
                            <KeyButton
                                onClick={() => dispatch(nextStep("South"))}
                            >
                                <ImageButton
                                    src={"./assets/key_down.png"}
                                    alt="South"
                                />
                            </KeyButton>
                            <KeyButton
                                onClick={() => dispatch(nextStep("East"))}
                            >
                                <ImageButton
                                    src={"./assets/key_right.png"}
                                    alt="East"
                                />
                            </KeyButton>
                        </Keyboard>
                    </Container>
                )}
            </>
        </LocationBackground>
    );
};
