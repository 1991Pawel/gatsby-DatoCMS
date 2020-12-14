import React from 'react'


const Form = () => (
<form 
    name="contact" 
    method="post" 
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    >
  <p>
    <label>Imie <input type="text" name="name" /></label>   
  </p>
  <p>
    <label>Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Wiadomość: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Wyślij</button>
  </p>
</form>
)
export default Form;