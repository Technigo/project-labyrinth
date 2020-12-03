import React from 'react'
import { useSelector } from 'react-redux'

export const History = () => {
  const historySteps = useSelector((store) => store.gameReducer.history)
  console.log(historySteps, 'historySteps')
  return (
    <div>
      {historySteps && (
        <div>
          <h2>Your previous moves</h2>
          {
            historySteps.map((step) => (
              <div key={step.action}>
                <p>{step.coordinates}</p>
                <p>{step.description}</p>
              </div>
            ))
          }
        </div>
      )}
    </div>
  )
}