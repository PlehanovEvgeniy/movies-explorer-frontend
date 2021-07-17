import './Login.css'
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/logo.svg';
import ValidationForm from "../../hooks/validationForm";


const Login = ({onLogin}) => {
    const { values, errors, isValid, handleChange, resetForm } = ValidationForm({});

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin(values.email, values.password);
        resetForm();
    }

    return (
        <section className='login'>
            <div className="login__header_container login__header_container-auth">
                <NavLink to='/' className="login__header_logo login__header_logo-auth">
                    <img src={logo} alt='Логотип'></img>
                </NavLink>
                <h1 className="login__header_text">Добро пожаловать!</h1>
            </div>
            <div className="login__container">
                <form className=" login__form" onSubmit={handleSubmit}>
                    <p className="login__form-label">
                        E-mail
                        <input
                            type="email"
                            name="email"
                            className="login__form-field"
                            placeholder="Укажите почту"
                            onChange={handleChange}
                            value={values.email || ""}
                            required/>
                        <span className="login__form-error">{errors.email}</span>
                    </p>
                    <p className="login__form-label">
                        Пароль
                        <input
                            type="password"
                            name="password"
                            className="login__form-field"
                            placeholder="Введите пароль"
                            minLength={8}
                            onChange={handleChange}
                            value={values.password || ""}
                            required/>
                        <span className="login__form-error">{errors.password}</span>
                    </p>

                    <button
                        type="submit"
                        className={`login__form-button ${
                            !isValid && "login__form-button_disable"
                        }`}
                        disabled={!isValid}>Войти</button>
                </form>
                <div className="login__info">
                    <p className="login__info-text">Еще не зарегистрированы?</p>
                    <Link to="/signup" className="login__info-link">Регистрация</Link>
                </div>
            </div>
        </section>
    );
}

export default Login;
