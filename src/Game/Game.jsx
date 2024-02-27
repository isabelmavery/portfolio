import React, { useState, useRef, useEffect } from 'react'
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
    const buttonRef = useRef(null); 

    useEffect(() => {
        // initialize with focus on start button to allow access via keys
        buttonRef.current.focus()
    }, [])

    const handleToggleStart = () => {
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
                <button ref={buttonRef} className='game-start' onClick={handleToggleStart}>{isActive ? "Exit" : "Start"} </button>
                <Player ref={playerRef} />
                <BackGround isActive={isActive}/>
            </div>
            <div>Press <span className='space-text'>Space</span> or <span className='space-text'>Tap</span> to Jump to your Heart's Content!</div>
        </div>
    )
}