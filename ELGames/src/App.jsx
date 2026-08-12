import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(20);
  const [playing, setPlaying] = useState(false);
  const [position, setPosition] = useState({ x: 50, y: 50 });

  const moveBug = () => {
    const randomX = Math.floor(Math.random() * 85);
    const randomY = Math.floor(Math.random() * 75);

    setPosition({
      x: randomX,
      y: randomY,
    });
  };

  const startGame = () => {
    setScore(0);
    setTime(20);
    setPlaying(true);
    moveBug();
  };

  const hitBug = () => {
    setScore(score + 1);
    moveBug();
  };

  useEffect(() => {
    if (!playing) return;

    if (time === 0) {
      setPlaying(false);
      return;
    }

    const timer = setTimeout(() => {
      setTime(time - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [time, playing]);

  return (
    <>
      <div className="app">
        <h1>🎮 ELGames</h1>

        <p className="subtitle">Catch the Bug!</p>

        <div className="gameInfo">
          <span>⭐ Points: {score}</span>
          <span>⏰ Time: {time}</span>
        </div>

        <div className="gameBoard">
          {!playing && time === 20 && (
            <div className="startScreen">
              <h2>🐞 Catch the Bug</h2>
              <p>
                Click the bug as many times as possible, before the time runs
                out!
              </p>
              <button onClick={startGame}>START</button>
            </div>
          )}

          {playing && (
            <button
              className="bug"
              onClick={hitBug}
              style={{
                left: `${position.x}%`,
                top: `${position.y}%`,
              }}>
              🐞
            </button>
          )}

          {!playing && time === 0 && (
            <div className="gameOver">
              <h2>GAME OVER 🎮</h2>
              <p>You got</p>
              <h3>{score} Points!</h3>

              {score >= 20 && <p>🔥 LEGEND!</p>}
              {score >= 10 && score < 20 && <p>😎 Nice!</p>}
              {score < 10 && <p>🐢 You can do better!</p>}

              <button onClick={startGame}>Play again</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
