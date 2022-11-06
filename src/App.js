// Imports do REACT
import { useCallback, useEffect, useState } from "react";

// Imports de CSS
import "./App.css";

// Imports de DADOS
import { wordsList } from "./data/words";

// Imports de COMPONENTES
import StartScreen from "./components/StartScreen";
import Game from "./components/Game";
import GameOver from "./components/GameOver";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

function App() {
  // Inicia o app com o estágio na posição 0 ou "start"
  const [gameStage, steGameStage] = useState(stages[0].name);

  return (
    <div className="App">
      <h1>Palavra Secreta</h1>
      {/* verifica o Estágio do jogo e exibe o componente necessário*/}
      {gameStage === "start" && <StartScreen />}
      {gameStage === "game" && <Game />}
      {gameStage === "end" && <GameOver />}
    </div>
  );
}

export default App;
