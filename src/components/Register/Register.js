import { Link } from 'react-router-dom';
import './Register.css'

const Register = () => {
    return (
        <section className='register'>
            <div className="register__container">
                <form className=" register__form">
                    <p className="register__form-label">Имя</p>
                    <input className="register__form-field" placeholder="Введите имя" />
                    <p className="register__form-label">E-mail</p>
                    <input type="email" className="register__form-field" placeholder="Укажите почту" />
                    <p className="register__form-label">Пароль</p>
                    <input type="password" className="register__form-field" placeholder="Придумайте пароль" />
                    <button type="submit" className="register__form-button">Зарегистрироваться</button>
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