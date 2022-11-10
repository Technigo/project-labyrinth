import React from 'react';

const onRestartBtn = () => {
  window.location.reload();
}

export const EndingPage = () => {
  return (
    <div>
      <button
        type="button"
        onClick={onRestartBtn}>Restart
      </button>
    </div>
  )
}