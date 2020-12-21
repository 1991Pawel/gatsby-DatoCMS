import React, { useState } from 'react'
import './Form.scss'
import { encode } from '../helpers/encode'
import { useMutation } from 'react-query'

const initialState = {
    name: '',
    email: '',
    message: '',
}

const Form = () => {
    const [values, setValues] = useState(initialState)

    const sendMessage = (values) => {
        return fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...values })
        });
    }

    const { mutate, isSuccess, isLoading, isError, reset } = useMutation(sendMessage, {
        onSuccess: () => {
            setTimeout(() => {
                reset();
            }, 3000)
        },
        onError: () => {
            setTimeout(() => {
                reset();
            }, 3000)
        },
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        mutate({ values });
        setValues(initialState);
    }

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
                {isError && <p className="form__error">Błąd wysyłania</p>}
                {isSuccess && <p className="form__success">Wiadomość wysłana</p>}
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
                    required />
                <button
                    disabled={isLoading}
                    className="form__btn" type="submit">
                    {`${isLoading ? "Wysyłanie" : "Wyślij"}`}
                </button>
            </div>
        </form >
    )
}
export default Form;