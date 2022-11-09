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
  //
  const [words] = useState(wordsList);
  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(5);
  const [score, setScore] = useState(0);

  const pickedWordAndCategory = () => {
    // Captura as chaves do Objeto Words, que são as Categorias
    const categories = Object.keys(words);
    // Captura uma Categoria aleatória
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)];
    // Captura uma palavra aleatória dentro da Categoria selecionanda
    const word =
      words[category][Math.floor(Math.random() * words[category].length)];

    return { word, category };
  };

  // Função para iniciar o jogo, mudando o stage para "game"
  const startGame = () => {
    // Chama a função para pegar a categoria e a palavra, no Inicio do game
    const { word, category } = pickedWordAndCategory();
    // Cria um Array com as Letras da Palavra selecionada
    let wordLetters = word.split("");
    wordLetters = wordLetters.map((l) => l.toLowerCase());

    // Preenchendo os Estados
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);

    setGameStage(stages[1].name);
  };

  // Processa as Letras Enviadas pelo usuário
  const verifyLetter = (letter) => {
    // Normaliza a letra para lowercase
    const normalizedLetter = letter.toLowerCase();

    // Verifica se a letra já foi utilizada.
    if (
      guessedLetters.includes(normalizedLetter) ||
      wrongLetters.includes(normalizedLetter)
    ) {
      return;
    }

    //
    if (letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedLetter,
      ]);
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter,
      ]);

      setGuesses((actualGuesses) => actualGuesses - 1);
    }
  };

  const clearLetterStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  };

  // useEffect Monitora um dado, e realiza uma ação para este dado.
  useEffect(() => {
    if (guesses <= 0) {
      setGameStage(stages[2].name);
      clearLetterStates();
    }
  }, [guesses]);

  // Reinicia o game.
  const retry = () => {
    setScore(0);
    setGuesses(5);

    setGameStage(stages[0].name);
  };

  return (
    <div className="App">
      {/* verifica o Estágio do jogo e exibe o componente necessário*/}
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && (
        <Game
          verifyLetter={verifyLetter}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        />
      )}
      {gameStage === "end" && <GameOver retry={retry} score={score} />}
    </div>
  );
}

export default App;
