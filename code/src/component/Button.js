import React from 'react';

export const Button = props => {
    const { text, onButtonClick  } = props;
    
    return (
      <button 
            onClick={onButtonClick}>
            {text}
      </button>
  ) 
}

export default Button;