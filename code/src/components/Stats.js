/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';

const Stats = (props) => {
  return (
    <div className="stat-container">
      <p>{props.title}</p>
      <progress
        className={`nes-progress ${props.className}`}
        value={props.value}
        max="100"
      />
    </div>
  );
};

export default Stats;
