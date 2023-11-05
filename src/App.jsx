
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react'
import MainMenu from './components/MainMenu';
import GameOver from './components/GameOver';
import Quiz from './components/Quiz';
import { QuizContext } from './ExtraFiles/Context';
function App() {
  //Menu 
  
  const [gameState, setGameState] =  useState("main-menu");
  const [score, setScore] = useState(0);
  return (

    <div className='App'>
      <h1>General Knowledge Question</h1>
      <QuizContext.Provider value={{gameState, setGameState, score, setScore}}>
        {gameState === 'main-menu' && <MainMenu />}
        {gameState === 'quiz' && <Quiz />}
        {gameState === 'Gameover' && <GameOver />}
      </QuizContext.Provider>
    </div>
  )
}

export default App
