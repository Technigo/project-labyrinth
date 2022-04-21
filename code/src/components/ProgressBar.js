import React from 'react'

const ProgressBar = () => {
  return (
    <progress
      className='nes-progress is-warning'
      value='20'
      max='100'>
    </progress>
  );
};

export default ProgressBar;