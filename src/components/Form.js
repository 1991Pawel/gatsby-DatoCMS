import React from 'react'


const Form = () => (
    <form
      name="contact-form"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input name="name" placeholder="imie" type="text" />
      <input name="email" placeholder="email@adress.com" type="email" />
      <textarea name="message" placeholder="text" />
      <button type="submit">Wyślij</button>
    </form>

)
export default Form;