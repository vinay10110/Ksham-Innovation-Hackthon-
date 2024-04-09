import React from 'react';
import './Home.css';
import google from '../../assets/google.png';
import iitkanpur from '../../assets/iitkanpur.png';
import iitmandi from '../../assets/iitmandi.png';
import samsung from '../../assets/samsung.png';
import  atal from '../../assets/atal.png';
import blind from '../.././assets/Animation - 1712479325017.json';
import charge from '../.././assets/Animation - 1712479484099.json';
import deaf from '../.././assets/Animation - 1712479906991.json';
import mute from '../.././assets/Animation - 1712471955380.json';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
const Home = () => {
  return (
    <div className="container-htm">
    <div className="app-container">
      <div className='area-content'>
      <div className="text-content">
        <h1 className="text-title">World's 1st Smart Aid Glasses for</h1>
        
          <h1 className="list-name">Deaf, Mute &  Blind</h1>
        
        <Link to="/Contact"><div className="btn-early">Get Early Access</div></Link>
      </div>
      </div>
  </div>
  <div className="text-container">
    <div className="main-text">
  <h1>Why Able Innovation Exists</h1>
  </div>
  <div className="side-text">
    <ul>
      <li>Globally, there are over 680 million people who are deaf, hard of hearing, mute, or blind.</li>
      <li>India alone is home to more than 80 million individuals belonging to these diverse disability groups.</li>
      <li>Sadly, an estimated 90% of these individuals lack access to education and often face poverty.</li>
      <li>or these individuals, accessing essential information, education, and communication channels remains a significant challenge.</li>
    </ul>
  </div>
  </div>
  <div className="card-box">
    <div className="cards">
      <h1>Glasses for Deaf & Hard of hearing</h1>
      <Lottie animationData={deaf} className="lottie-icons"/>
      <ul className='cards-texts'>
        <li>Patented Dome Bone Conduction Transducer</li> 
        <li>Arrays of Microphones</li>
        <li>Bluetooth & Rechargeable</li>
      </ul>
    </div>
    <div className="cards">
      <h1>Glasses for Blind</h1>
      <Lottie animationData={blind} className="lottie-icons"/>
      <ul className='cards-texts'>
        <li>Objects & Face Recognition</li> 
        <li>1080p front camera</li>
      </ul>
    </div>
    <div className="cards">
      <h1>Glasses for Mute</h1>
      <Lottie animationData={mute} className="lottie-icons"/>
      <ul className='cards-texts'>
        <li>Real time sign language to audio conversion</li> 
        <li>Pairs of side camera & speaker.</li>
        <li>Offline processing</li>
      </ul>
    </div>
    <div className="cards">
      <h1>Smart Case</h1>
      <Lottie animationData={charge} className="lottie-icons"/>
      <ul className='cards-texts'v>
        <li>Day long battery backup</li> 
        <li>Desktop computer mode.</li>
        
      </ul>
    </div>
  </div>
  <h1 className='suppoters-title'>Our Supporters</h1>
  <div className='suppoters-logo'>
    <img src={atal} alt="atal"/>
    <img src={iitkanpur}  alt="iitkanpur"/>
    <img src={samsung} alt="samsung"/>
    <img src={google} alt="google"/>
    <img src={iitmandi} alt="iitmandi"/>
  </div>
  </div>

  )
}

export default Home
