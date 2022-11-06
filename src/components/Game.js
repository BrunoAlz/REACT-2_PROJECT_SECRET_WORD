import "./Game.css";

const Game = ({ verifyLetter }) => {
  return (
    <div className="game">
      <p className="points">
        <span>Pontuação: 000</span>
      </p>
      <h1>Adivinhe a Palavra: </h1>
      <h3 className="tip">
        Dica sobre a palavra: <span>Dica...</span>
        <div className="wordCOntainer">
          <span className="letter">A</span>
          <span className="blackSquare"></span>
        </div>
        <div className="letterContainer">
          <p>Tente adivinhar uma letra da palavra: </p>
          <form>
            <input type="text" name="letter" maxLength="1" required/>
            <button>Jogar!</button>
          </form>
        </div>
        <div className="wrongLettersContainer">
          <p>Letras já Utilizadas: </p>
          <span>a, </span>
          <span>b, </span>
        </div>
      </h3>
    </div>
  );
};

export default Game;
