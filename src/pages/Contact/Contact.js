import React from 'react';
import './Contact.css';

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
  </form>
  );
};

export default Contact;
