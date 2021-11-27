import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nextStep } from '../reducers/game';
import { game } from '../reducers/game';

import './labyrinth.css';

export const Labyrinth = () => {
  const { description, coordinates, actions } = useSelector(
    (store) => store.game.currentPosition
  );
  const dispatch = useDispatch();

  const setBgImg = () => {
    let bg = '';
    switch (coordinates) {
      case '0,0':
        bg = '../assets/cavern-arch.jpg';
        break;
      case '1,0':
        bg = '../assets/ceiling.jpg';
        break;
      case '1,1':
        bg = '../assets/colors.jpg';
        break;
      case '0,1':
        bg = '../assets/soundwaves.jpg';
        break;
      case '0,2':
        bg = '../assets/music.jpg';
        break;
      case '0,3':
        bg = '../assets/bookshelf.jpg';
        break;
      case '1,3':
        bg = '../assets/light.jpg';
        break;
      default:
        bg = '../assets/cavern-arch.jpg';
    }
    return bg;
  };

  const handleButtonClick = (type, direction) => {
    //call the API, pass along type and dir as part of the body
    dispatch(nextStep(type, direction));
  };

  // These are the alternatives the player can choose from
  const ActionCard = ({ description, type, direction }) => (
    <div className='action-card'>
      <p>{description}</p>
      <button onClick={() => handleButtonClick(type, direction)}>
        Head {direction.toLowerCase()}
      </button>
    </div>
  );

  return (
    <section
      className='background'
      style={{
        backgroundImage: `url(${setBgImg()})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
      }}
    >
      <div className='description'>
        <p>{description}</p>
      </div>
      {actions.length === 0 && (
        <button
          className='button-restart'
          type='button'
          onClick={() => dispatch(game.actions.resetGame())}
        >
          Restart
        </button>
      )}
      {actions.length > 0 &&
        actions.map((item) => <ActionCard key={item.direction} {...item} />)}
    </section>
  );
};
