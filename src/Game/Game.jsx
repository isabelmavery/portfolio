import React, { useState, useRef } from 'react'
import "./Game.css"
import Player from './Player'

function GrassBunch() {
    return (
    <div className="grass-bunch">
        <div className="grass-small"/>
        <div className="grass"/>
    </div>
    )
}

function BackGround({ isActive }) {
    return (
        <div className={isActive ? "move-forward background" : "background"}>
           <GrassBunch/>
           <GrassBunch/>
           <GrassBunch/>
           <GrassBunch/>
           <GrassBunch/>
        </div>
    )
}

export default function Game() {
    const [isActive, setIsActive] = useState(false)
    const playerRef = useRef(null);

    const handleClick = () => {
        if (isActive) {
            setIsActive(false)
            playerRef.current.blur();
        } else {
            setIsActive(true)
            playerRef.current.focus();
        }
     }

    return (
        <div style={{ textAlign: "center"}}>
            <div className='game-container primary-content'>
                <button className='game-start' onClick={handleClick}>{isActive ? "Exit" : "Start"} </button>
                <Player ref={playerRef} />
                <BackGround isActive={isActive}/>
            </div>
            {isActive && <div>Press <span className='space-text'>Space</span> to Jump to your Heart's Content!</div>}
        </div>
    )
}