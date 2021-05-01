import React from 'react'

const ErrorBoard = ({ error }) => {
  return (
    <div>
      <h1 className="error-message">
        Oops, Something went wrong... 
      </h1>
      <p className="error-message">{error}</p>
    </div>
  )
}

export default ErrorBoard