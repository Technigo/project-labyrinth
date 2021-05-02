import React from 'react'
import "nes.css/css/nes.min.css"

const Button = ({ buttonStyle, onClick, buttonText, disabled, disabledStyle }) => {
	return (
		<button
      type="button" 
      className={disabled ? disabledStyle : buttonStyle}
      onClick={onClick}
      disabled={disabled}
    > 
		{buttonText}
    </button>
  )
}

export default Button