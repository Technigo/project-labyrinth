import React from 'react'

export const ActionList = () => {

  // const [message, setMessage] = useState("") 

  const onAction = () => {
    console.log("hallå")
    // fetch("https://wk16-backend.herokuapp.com/action", {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ type: type, direction: direction })
    // }
    // )
  }

  return (
    <button onClick={onAction}>Hejhej</button>
  )

}