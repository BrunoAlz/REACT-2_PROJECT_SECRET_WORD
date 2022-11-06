import "./StartScreen.css";

const StartScreen = ({startGame}) => {
  return (
    <div className="start">
      <h1>Palavra Secreta</h1>
      <p>Clique no Botão para iniciar o Jogo</p>
      <button onClick={startGame}>COMEÇAR O JOGO</button>
    </div>
  );
};

export default StartScreen;
