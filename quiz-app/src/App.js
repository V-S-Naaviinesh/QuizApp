import './App.css';
import Menu from './components/Menu';
import {useState} from "react"
import {GameStateContext} from "./helpers/Contexts"
import Quiz from './components/Quiz';
import EndScreen from './components/Endscreen';

function App() {
  const [gamestate, setGameState] =useState("menu")
  const [userName, setUserName] = useState("")
  const [score, setScore] = useState(0)


  
  return (
    <div className="App">
     <h1>Sample Quiz App About JurisTech</h1>
     <h2>by </h2>
     <h2>V.S.Naaviinesh</h2>
     <GameStateContext.Provider value={{gamestate,setGameState,userName,setUserName,score,setScore}}>
        {gamestate === "menu" && <Menu/>}
        {gamestate === "playing" && <Quiz/>}
        {gamestate === "finished" && <EndScreen/>}
        </GameStateContext.Provider>
    
      
    
    
 
    </div>
  );
}

export default App;
