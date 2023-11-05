import React from 'react'
import { useContext } from 'react'
import { QuizContext } from '../ExtraFiles/Context'
import "../App.css"
function MainMenu() {
  const { setGameState} = useContext(QuizContext)
  return (
    <div className='MainMenu'>
      <button onClick={() => setGameState("quiz")} className='start-btn'>Start</button>
    </div>
  )
}

export default MainMenu
