import React from 'react'

const images = (description) => {
  let imgSrc;
  const keyWords = [
    'worn',
    'rickety',
    'distance',
    'sturdier',
    'pavers',
    'intention',
    'echoing',
    'gizmos',
    'chest',
    'threshold',
    'bright'
  ];

  keyWords.map((word) => {
    return description.includes(word)
      ? imgSrc = `./images/${word}.jpg`
      : null
  });

  return imgSrc;
};

const GameImages = ({ action }) => <img className='action-image' src={images(action)} alt='directions' />

export default GameImages;