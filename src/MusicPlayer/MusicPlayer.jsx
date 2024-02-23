import { useState } from 'react'
import { useSound } from 'use-sound' 
import spanishGuitar from '../sounds/spanish_guitar_loop.mp3'
import './MusicPlayer.css'

function Animation() {
  return <div className='vibration'/>
}
export default function MusicPlayer() {
    const [isPlaying, setIsPlaying] = useState(false)
    const [play, { stop }] = useSound(spanishGuitar);
    return (
      <div className="music-container">
        <Animation/>
        <button
          className={isPlaying ? "active music" : "music"}
          onClick={() => {
              if (isPlaying) {
                  stop()
                  setIsPlaying(false)
              } else {
                  play()
                  setIsPlaying(true)
              }
          }}
        >
          <svg fill="white" data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 dYnaPI">
              {!isPlaying ? <path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path>
              : <path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path>
              }
          </svg>
        </button>
      </div>
    );
  }