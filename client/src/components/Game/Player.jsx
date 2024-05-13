import React, { useState } from "react";
import "./Game.css";

const KEY_CODES = {
  SPACE_KEY: 32,
};

const Player = React.forwardRef((props, ref) => {
  const [jumping, setJumping] = useState(false);

  const handleJump = (e) => {
    e.preventDefault();

    // don't need to trigger jump if already in the air
    if (jumping) return;

    // turn on jumping animation
    setJumping(true);

    // disable jumping animation
    setTimeout(() => {
      setJumping(false);
    }, 700);
    // note, seconds must sync with css animation duration
  };

  const handleMovement = (e) => {
    switch (e.keyCode) {
      case KEY_CODES.SPACE_KEY:
        handleJump(e);
        return;
    }
  };

  return (
    <div
      {...props}
      tabIndex={0}
      className={jumping ? "jumping player" : "player"}
      onKeyDown={(e) => handleMovement(e)}
      onClick={handleJump}
      ref={ref}
    />
  );
});

export default Player;
