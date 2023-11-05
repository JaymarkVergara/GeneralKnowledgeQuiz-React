import React from 'react'
import { useContext } from 'react'
import { QuizContext } from '../ExtraFiles/Context'
import "../App.css"
import { Question } from '../ExtraFiles/QuestionStorage'
function GameOver() {
  const {score, setScore, setGameState} = useContext(QuizContext)
  
  const restart = () =>{
    setScore(0)
    setGameState("main-menu")
  }
  
  return (
    <div className='gameover'>
      <h1>Quiz End</h1>
      <h2> {score} / {Question.length} </h2>
      <button onClick={restart}>Restart Quiz</button>
    </div>
  )
}

export default GameOver

