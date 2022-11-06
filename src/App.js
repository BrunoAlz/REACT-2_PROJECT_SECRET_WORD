// Imports do REACT
import { useCallback, useEffect, useState } from "react";

// Imports de CSS
import "./App.css";

// Imports de DADOS
import { wordsList } from "./data/words";

// Imports de COMPONENTES
import StartScreen from "./components/StartScreen";

function App() {
  return (
    <div className="App">
      <h1>Palavra Secreta</h1>
      <StartScreen />
    </div>
  );
}

export default App;
