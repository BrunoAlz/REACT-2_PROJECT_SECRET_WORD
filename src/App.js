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
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  // Função para iniciar o jogo, mudando o stage para "game"
  const startGame = () => {
    setGameStage(stages[1].name);
  };

  // Processa as Letras Enviadas pelo usuário
  const verifyLetter = () => {
    setGameStage(stages[2].name);
  };

  // Reinicia o game.
  const retry = () => {
    setGameStage(stages[0].name);
  };

  return (
    <div className="App">
      {/* verifica o Estágio do jogo e exibe o componente necessário*/}
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && <Game verifyLetter={verifyLetter} />}
      {gameStage === "end" && <GameOver retry={retry} />}
    </div>
  );
}

export default App;
