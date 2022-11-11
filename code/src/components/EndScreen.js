import React from 'react';
import { useSelector } from 'react-redux';

import './endscreen.css';

export const EndScreen = () => {
  const { description } = useSelector((store) => store.game.currentPosition)

  return (
    <section className="endscreen">
      <div className="end-description">
        <h1>You dared - and made it out!</h1>
        <p>{description}</p>

      </div>
    </section>
  )
}