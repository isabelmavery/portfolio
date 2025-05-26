import { useState, useRef, useEffect } from "react";
import "./Game.css";
import Player from "./Player";
import Button from "../../base-components/Button/Button";
import useGame from "../../hooks/useGame";

function GrassBunch() {
  return (
    <div className="grass-bunch">
      <div className="grass-small" />
      <div className="grass" />
    </div>
  );
}

function BackGround({ isActive }) {
  return (
    <div className={isActive ? "move-forward background" : "background"}>
      <GrassBunch />
      <GrassBunch />
      <GrassBunch />
      <GrassBunch />
      <GrassBunch />
    </div>
  );
}

export default function Game() {
  const [isActive, setIsActive] = useState(false);
  const playerRef = useRef(null);
  const buttonRef = useRef(null);
  const { startGame, endGame, currentScore } = useGame();

  useEffect(() => {
    // initialize with focus on start button to allow access via keys
    buttonRef.current.focus();
  }, []);

  const handleToggleStart = () => {
    if (isActive) {
      setIsActive(false);
      playerRef.current.blur();
      endGame();
    } else {
      setIsActive(true);
      playerRef.current.focus();
      startGame();
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div className="game-container primary-content">
        <h4>Your Score: {currentScore}</h4>
        <Button
          ref={buttonRef}
          className="game-start"
          onClick={handleToggleStart}
        >
          {isActive ? "Exit" : "Start"}{" "}
        </Button>
        <Player ref={playerRef} />
        <BackGround isActive={isActive} />
      </div>
      <div>
        Press <span className="space-text">Space</span> or{" "}
        <span className="space-text">Tap</span> to Jump to your Heart's Content!
      </div>
    </div>
  );
}
