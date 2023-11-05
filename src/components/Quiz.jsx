import {  useState, useContext } from "react"
import React from 'react'
import { Question } from "../ExtraFiles/QuestionStorage";
import { QuizContext } from '../ExtraFiles/Context'

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerChosen, setAnswerChosen] = useState("");
  const {score, setScore, setGameState} = useContext(QuizContext)
  
  const nextQuestion = () => {
    if (Question[currentQuestion].answer == answerChosen){
      setScore(score + 1)
    }
    
    setCurrentQuestion(currentQuestion + 1);
  };

  const FinishQuiz = () => {
    if (Question[currentQuestion].answer == answerChosen){
      setScore(score + 1)
    }

    setGameState("Gameover")

  }

  return (
    <div className="Quiz">
        <h1 style={{color: "white"}}>{Question[currentQuestion].prompt}</h1>
        <div className="Choices">
         <button onClick={() => setAnswerChosen("A")}>{Question[currentQuestion].A}</button>
         <button onClick={() => setAnswerChosen("B")}>{Question[currentQuestion].B}</button>
         <button onClick={() => setAnswerChosen("C")}>{Question[currentQuestion].C}</button>
         <button onClick={() => setAnswerChosen("D")}>{Question[currentQuestion].D}</button>
        </div>  
      {currentQuestion == Question.length - 1 ? 
      <button className="qbutton" onClick={FinishQuiz}>Finish</button> : (
      <button className="qbutton" onClick={nextQuestion}>Next</button>
      )}
       
    </div>
  )
}

export default Quiz
