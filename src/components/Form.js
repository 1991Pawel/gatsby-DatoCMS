import React from 'react'
import './Form.scss';
import {encode} from '../helpers/encode';
import {useForm} from '../hooks/useForm';

const initialState = {
    name: '',
    email: '',
    message: '',
}

const Form = () => {
    const {values,setValues,setError,setSucess,success,error} =  useForm(initialState)
 
    const handleSubmit = e => {
        setError(false);
        e.preventDefault();

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...values })
        })
            .then((response) => {
                console.log('wysłana')
                setError(() => false)
                setSucess(true)
            })
            .catch(error => {
                console.log('nie wyslana')
                setError(() => true);
                setSucess(false)
            })

        setValues(initialState);
    };

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <form
            className="form"
            name="contact-form"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
        >
            <div className="form__inner">
                {error ? <p className="form__error">Błąd wysyłania</p> : null}
                {success ? <p className="form__success">Wiadomość wysłana</p> : null}
                <label
                    className="form__label"
                    htmlFor="name">Imię</label>
                <input
                    onChange={(e) => handleChange(e)}
                    className="form__input"
                    type="text" id="name"
                    name="name"
                    value={values.name}
                    required />
                <label className="form__label" htmlFor="mail">Email</label>
                <input
                    onChange={(e) => handleChange(e)}
                    className="form__input"
                    type="email" id="mail"
                    name="email"
                    value={values.email}
                    required />
                <label className="form__label" htmlFor="message">Wiadomość</label>
                <textarea
                    onChange={(e) => handleChange(e)}
                    className="form__textarea"
                    rows="4" cols="50"
                    name="message"
                    value={values.message}
                    required/>
        
                <button className="form__btn" type="submit">Wyślij</button>
            </div>
        </form>
    )
}
export default Form;