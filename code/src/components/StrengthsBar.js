import React from 'react';
// might edit this file into styled components together with Maja
export const StrengthsBar = (props) => {
  return (
    <div className="bar-container">
      <p>{props.title}</p>
      <progress
        className={`nes-progress ${props.className}`}
        value={props.value}
        max="100" />
    </div>
  );
};