import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { init } from 'ityped'

const Description = () => {
  const userName = useSelector(store => store.labyrinth.userName)
  const actions = useSelector(store => store.labyrinth.actions)

  useEffect(() => {
    const textAnimation = document.querySelector("#textAnimation");
    init(textAnimation, {
      disableBackTyping: true,
      showCursor: false,
      strings: [actions.description]
    })
  }, [actions])

  return (
    <>
      {userName !== null && <div className="history" id="textAnimation"></div>}
    </>
  )
}

export default Description