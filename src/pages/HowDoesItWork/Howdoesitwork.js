import React from 'react'
import lensVideo from '../../assets/big.mp4';
import './Howdoesitwork.css'
const Howdoesitwork = () => {
  return (
    <div className="container">
        <h1>How Able Glasses Work</h1>
    <div className="videoBig">
      <video src={lensVideo} autoPlay loop  />
      <div className="card-container">
        <h3 className="card-title">Our Innovation</h3>
        <p className="card-text">Able glasses aims to provide smart aid glasses for Deaf, Mute and Blind.

The Able glasses uses patented bone conduction to enable Deaf to Listen, interpret signs & acts as voice assist tool for the mute, the sensory audio-based information enables the blind to visualize.

The open ear design makes able glasses a complete smart glasses device for everyone </p>
      </div>
    </div>
    </div>
  )
}

export default Howdoesitwork
