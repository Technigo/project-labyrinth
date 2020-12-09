import React from 'react';
import { useSelector } from 'react-redux';

export const PreviousPositions = () => {

const history = useSelector(store => store.gameReducer.history);  
const historyFiltered = history.filter((item,index) => index !== 0).reverse(); 

  return (
    <div className="gameboard-history">
      <aside className="previous-steps">
        {history.length > 1 ? 
        <>
        <h3 className="previous-steps-header">Previous coordinates</h3>
          <ol className="previous-steps-list">
            {historyFiltered.map((step,index) => (
              <li key={index}>
                {step.coordinates}
              </li>
            ))}
          </ol> </>:
          <></>
          }
      </aside>
    </div>

  )
}