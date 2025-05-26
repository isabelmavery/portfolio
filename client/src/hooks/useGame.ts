import { useState } from "react";
const SEVEN_HUNDRED_MS = 700;

export default function useGame() {
  const [currentScore, setCurrentScore] = useState<number>(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  // On start game initialize an interval
  // You gain 20  points for every 700ms  you "survive" the game
  const startGame = () => {
    // initialize score
    setCurrentScore(0);

    const intervalId = setInterval(() => {
      setCurrentScore((prevScore) => prevScore + 20);
    }, SEVEN_HUNDRED_MS);

    // set interval for use when clearing.
    setIntervalId(intervalId);
  };

  const endGame = () => {
    if (!intervalId) return null;
    clearInterval(intervalId);
  };

  return {
    startGame,
    endGame,
    currentScore,
  };
}
