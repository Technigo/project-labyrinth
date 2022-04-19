import React from "react"
import { useSelector } from "react-redux"
import { generateQuestion } from "reducers/gamereducer"

const Maze = () => {
  const question = useSelector(store.questions.question)

  const onQuestionRegenerate = () => {
    dispatch(generateQuestion(tag))
  }

  //Vad som ska vara här istaället för question ser vi i vår API ÄVEN TAG ska ändras, på rad 8, 9, och 17, 18.
  return (
    <div>
      <h3> This is instructions: {question.content} </h3>
      {questions.tags.map((tag) => (
        <button key={tag} onClick={() => onQuestionRegenerate(tag)}>
          {tag}
        </button>
      ))}
    </div>
  )
}

export default Maze
