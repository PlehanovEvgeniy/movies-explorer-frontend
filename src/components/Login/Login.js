import './Login.css'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <section className='login'>
            <div className="login__container">
                <form className=" login__form">
                    <p className="login__form-label">E-mail</p>
                    <input type="email" className="login__form-field" placeholder="Укажите почту" />
                    <p className="login__form-label">Пароль</p>
                    <input type="password" className="login__form-field" placeholder="Придумайте пароль" />
                    <button type="submit" className="login__form-button">Войти</button>
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