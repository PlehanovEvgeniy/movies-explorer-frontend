import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import './Register.css';
import logo from '../../images/logo.svg';
import ValidationForm from "../../hooks/validationForm";

const Register = ({onRegister}) => {
    const { values, errors, isValid, handleChange, resetForm } = ValidationForm({});

    const handleSubmit = (e) => {
        e.preventDefault();
        onRegister(values.email, values.password, values.name);
        resetForm();
    }

    return (
        <section className='register'>
            <div className="register__header_container register__header_container-auth">
                <NavLink to='/' className="register__header_logo register__header_logo-auth">
                    <img src={logo} alt='Логотип'></img>
                </NavLink>
                <h1 className="register__header_text">Добро пожаловать!</h1>
            </div>
            <div className="register__container">
                <form className=" register__form" onSubmit={handleSubmit}>
                    <p className="register__form-label">
                        Имя
                        <input
                            type="text"
                            name="name"
                            className="register__form-field"
                            placeholder="Введите имя"
                            onChange={handleChange}
                            value={values.name || ""}
                            required/>
                        <span className="register__form-error">{errors.name}</span>
                    </p>

                    <p className="register__form-label">
                        E-mail
                        <input
                            type="email"
                            name="email"
                            className="register__form-field"
                            placeholder="Укажите почту"
                            onChange={handleChange}
                            value={values.email || ""}
                            required/>
                        <span className="register__form-error">{errors.email}</span>
                    </p>

                    <p className="register__form-label">
                        Пароль
                        <input
                            type="password"
                            name="password"
                            className="register__form-field"
                            placeholder="Придумайте пароль"
                            minLength={8}
                            onChange={handleChange}
                            value={values.password || ""}
                            required />
                        <span className="register__form-error">{errors.password}</span>
                    </p>

                    <button
                        type="submit"
                        className={`register__form-button ${
                            !isValid && "register__form-button_disable"
                        }`}
                        disabled={!isValid}>Зарегистрироваться</button>
                </form>
                <div className="register__info">
                    <p className="register__info-text">Уже зарегистрированы?</p>
                    <Link to="/signin" className="register__info-link">Войти</Link>
                </div>
            </div>
        </section>
    );
}

export default Register;
