import React from "react";
import "../App.css"
import {useContext} from "react"
import {GameStateContext} from "../helpers/Contexts"
import { Questions } from "../helpers/Questions";



const EndScreen = () => {
    const {score,setScore, setGameState, userName} = useContext(GameStateContext)

    const restartQuiz = () =>{
        setScore(0)
        setGameState('menu')
    }    
    return <div className="Endscreen">
        <h1>Quiz Finished</h1>
        <h3>{userName}</h3>
        <h1>Your Score:{score} / {Questions.length}</h1>
        <button onClick={restartQuiz}>Restart Game</button>
    </div>
}

export default EndScreen