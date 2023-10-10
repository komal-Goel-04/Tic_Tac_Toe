import React from 'react'
import './game/game.css'

import { useNavigate } from 'react-router-dom'
//ugly bite - https://www.fontspace.com/ugly-byte-font-f53757
//pixel gaming - https://www.fontspace.com/pixel-gaming-font-f94045
//info gaming - https://www.fontspace.com/hackbot-font-f52802
import Square from './game/Square'

export default function LandingPage() {
  const navigate = useNavigate()
  return (
    <div className='landing-page'>
      <div className='heading'><h1>Tic   Tac   Toe</h1></div>
      <div className='start-button-div'><button onClick={() => navigate('game')} className='start-button'>Start</button></div>
    </div>
  )
}
