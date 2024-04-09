import React from 'react';
import './Contact.css';
import { AiTwotonePhone } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
const Contact = () => {

  return (
    <form className="form" >
    <h1>Your satisfaction is our number one focus</h1>
      <h5>Please fill in your details below and one of our friendly team members will be in touch shortly.</h5>
      <input
        type="text"
        name="firstName"
        required
        placeholder='First Name'
      />
   
     
      <input
        type="text"
        name="lastName"
        required
        placeholder='Last Name'

      />
    
   
     
      <input
        type="tel"
        name="mobileNo"
        required
        placeholder='Mobile no'
      />
   
     
      <input
        type="email"
        name="email"
        required
        placeholder='Email'
      />
    
    <button type="submit">Submit</button>
    <span className='number'><AiTwotonePhone color="white" size={27}/>+91 9373124725</span>
    <br></br>
    <span className='number'><MdEmail  color="white" size={27} />   Kshaminnovation@gmail.com</span>
    
  </form>
  );
};

export default Contact;
