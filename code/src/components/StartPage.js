import React, { useState } from 'react';
import labyrinth, { generateGame } from '../reducers/labyrinth';
import { useDispatch } from 'react-redux';
import { CardContainer, Title, TitleBar, Content, SecondaryText} from './Styles';
import "antd/dist/antd.css";
import { Button } from './Styles';


const StartPage  = () => {
    const [player, setPlayer] = useState('');
    const [notValidated, setNotValidated] = useState(false);

    const dispatch = useDispatch();

    const onPlayerSet = () => {
        if (player) {
            dispatch(labyrinth.actions.setPlayer(player));
            dispatch(generateGame());
        } else {
            setNotValidated(true)
        }
        
    }

    return (
        <CardContainer>
            <Content>
                <TitleBar>
                    <Title>Welcome to Labyrinth! Please enter your name: </Title>
                    {notValidated && <SecondaryText>Please enter your name</SecondaryText>}
                </TitleBar>
                <input
                    required
                    type='text'
                    value={player}
                    placeholder="Type your name"
                    className="nes-input"
                    onChange={event => setPlayer(event.target.value)}
                />
                <Button type="button" className="nes-btn is-primary" onClick={onPlayerSet}>Let's begin!</Button>
            </Content>
        </CardContainer>
    )
}

export default StartPage;