/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { gameProgress } from 'reducers/game'
import { Styled } from './Gameplay.styled';
import Loading from './Loading';

export const Gameplay = () => {
  const dispatch = useDispatch();
  const progress = useSelector((store) => store.game.progress);
  const isLoading = useSelector((store) => store.game.isLoading)

  const onClickAction = (type, direction) => {
    dispatch(gameProgress(type, direction));
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Styled.Container>
            <div>
              <Styled.GamePlayText>{progress.description}</Styled.GamePlayText>
              <div>
                {progress.actions.map((item) => (
                  <>
                    <Styled.GamePlayText>{item.description}</Styled.GamePlayText>
                    <Styled.GamePlayButton
                      type="button"
                      onClick={() => onClickAction(item.type, item.direction)}> Go {item.direction}
                    </Styled.GamePlayButton>
                  </>
                ))}
              </div>
            </div>
          </Styled.Container>
          <Styled.Footer>
            <Styled.FooterText>
          Made by Kim Svensson, Nick Jensen & Hanna Nörgård
            </Styled.FooterText>
            <Styled.FooterText>
        Background by https://ansimuz.com/
            </Styled.FooterText>
            <Styled.FooterText>
          Loading gif by https://twitter.com/HernanZh
            </Styled.FooterText>
          </Styled.Footer>
        </>
      )}
    </>
  )
};