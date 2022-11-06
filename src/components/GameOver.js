import "./GameOver.css";

const GameOver = ({retry}) => {
  return (
    <div>
      <h1>Game Over</h1>
      <button onClick={retry}>COMEÇAR O JOGO</button>
    </div>
  );
};

export default GameOver;
