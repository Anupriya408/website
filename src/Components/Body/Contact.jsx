import React, { useState, useEffect } from 'react';
import './Contact.css';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [mobilenumber, setMobilenumber] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      
      console.log('Form submitted:', { name, email, message, mobilenumber });
    };
  
    return (
      <div className= "form-container">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <br />
        <label>
          Message:
          <input
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
        </label>

        <br />
        <label>
          Mobile number:
          <input className= "mobile"
            value={mobilenumber}
            onChange={(event) => setMessage(event.target.value)}
          />
        </label>

        <br />
        <button type="submit">Submit</button>
      </form>
      </div>
    );
  };
  
  export default ContactForm;
  