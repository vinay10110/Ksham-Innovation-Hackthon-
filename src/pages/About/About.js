import React from 'react'
import Lottie from 'lottie-react'
import animation from '../../assets/Animation - 1712473651126.json'
import { useTypewriter,Cursor } from 'react-simple-typewriter';
import vision from '../../assets/Animation - 1712482983592.json'
import './About.css'
const About = () => {
  const [text]=useTypewriter({
    words:['Our vision is to leverage cutting-edge technology to empower individuals with hearing, speech, or visual impairments, fostering a more inclusive and accessible world. We envision a future where our smart glasses become a bridge to communication, independence, and endless possibilities, allowing everyone, regardless of their abilities, to connect, express themselves, and thrive in our interconnected society.'],
    loop:{},
    typeSpeed:25,
    deleteSpeed:25
  })
  return (
    <div className="about-container">
      <div className="logo-container">
        <div className="logo-head">
        <h1 className="logo-container-title">What We Do</h1>
    
      <Lottie animationData={animation} className='logo'/>
      </div>
      <div className="logo-text">
       <p>We at Ksham Innovation work to provide smart aid glasses for Deaf, Mute and Blind. The Able glasses uses patented bone conduction to enable Deaf to Listen, interpret sign language for mute, the sensory audio-based information enables the blind to visualize. The open ear design makes able glasses a complete smart glasses device for everyone.</p>
      </div>
   </div>
   <div className="typo">
    <div className="typo-text">
      
      <span>{text}</span>

<Cursor />

    </div>
    <div className="typo-title">
      Our Vision
      <Lottie animationData={vision} className='logo'/>
    </div>
   </div>
   <div className="description">
    <div className="description-title">How We DO It</div>
    <p className='description-text'>At Ksham Innovation, we break down barriers and make technology accessible to everyone. We believe that everyone deserves the opportunity to hear, speak, and navigate the world in real-time, regardless of having hearing, speech, or visual impairment.

Our technology is designed to empower those with disabilities, allowing them to learn, communicate & perform their daily chores with greater ease and independence. But our work doesn't stop there. We dream & envision creating a smart and safer alternative to traditional earbuds and headphones, extending the age during which people may face difficulties in hearing.

By doing so, we are not only improving the lives of those with hearing loss, but also providing a solution for anyone who wants to enjoy music, information access in a safer way, and audio content while minimizing the risk of damaging their hearing.</p>
   </div>
   </div>
  )
}

export default About
