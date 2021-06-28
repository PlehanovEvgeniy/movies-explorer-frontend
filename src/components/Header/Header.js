import './Header.css';
import { NavLink, Switch, Route } from 'react-router-dom';
import logo from '../../images/logo.svg';
import account from '../../images/account.svg'

const Header = () => {
    return (
        <Switch>
            <Route exact path="/">
                <header className="header header__bgc">
                    <NavLink to='/' className="header__logo">
                        <img src={logo} alt='Логотип'></img>
                    </NavLink>

                    <div className="header__container">
                        <nav className="header__authorization">
                            <NavLink to='signup' className="header__signup">Регистрация</NavLink>
                            <NavLink to='signin' className="header__signin">Войти</NavLink>
                        </nav>
                    </div>
                </header>                
            </Route>
            
            <Route exact path="/signup">
                <header className="header">
                    <div className="header__container header__container_auth">
                        <NavLink to='/' className="header__logo header__logo-auth">
                            <img src={logo} alt='Логотип'></img>
                        </NavLink>
                        <h1 className="header__text">Добро пожаловать!</h1>
                    </div>
                </header>
            </Route>
            
            <Route exact path="/signin">
                <header className="header">
                    <div className="header__container header__container_auth">
                        <NavLink to='/' className="header__logo header__logo-auth">
                            <img src={logo} alt='Логотип'></img>
                        </NavLink>
                        <h1 className="header__text">Рады видеть!</h1>
                    </div>
                </header>
            </Route>

            <Route exact path="/movies">
                <header className="header ">
                    <div className="header__container ">
                        <NavLink to='/' className="header__logo">
                            <img src={logo} alt='Логотип'></img>
                        </NavLink>
                        <div className="header__nav">
                            <NavLink to='/movies' className='header__nav-link header__nav-link-active'>
                                Фильмы
                            </NavLink>

                            <NavLink to='/saved-movies' className='header__nav-link'>
                                Сохранённые фильмы
                            </NavLink>
                        </div>
                        <NavLink to='/profile' className="header__account">
                            <img src={account} alt='Логотип'></img>
                        </NavLink>
                    </div>
                </header>
            </Route>

            <Route exact path="/saved-movies">
                <header className="header ">
                    <div className="header__container ">
                        <NavLink to='/' className="header__logo">
                            <img src={logo} alt='Логотип'></img>
                        </NavLink>
                        <div className="header__nav">
                            <NavLink to='/movies' className='header__nav-link'>
                                Фильмы
                            </NavLink>

                            <NavLink to='/saved-movies' className='header__nav-link header__nav-link-active'>
                                Сохранённые фильмы
                            </NavLink>
                        </div>
                        <NavLink to='/profile' className="header__account">
                            <img src={account} alt='Логотип'></img>
                        </NavLink>
                    </div>
                </header>
            </Route>

            <Route exact path="/profile">
                <header className="header ">
                    <div className="header__container ">
                        <NavLink to='/' className="header__logo">
                            <img src={logo} alt='Логотип'></img>
                        </NavLink>
                        <div className="header__nav">
                            <NavLink to='/movies' className='header__nav-link header__nav-link-active'>
                                Фильмы
                            </NavLink>

                            <NavLink to='/saved-movies' className='header__nav-link'>
                                Сохранённые фильмы
                            </NavLink>
                        </div>
                        <NavLink to='/profile' className="header__account">
                            <img src={account} alt='Логотип'></img>
                        </NavLink>
                    </div>
                </header>
            </Route>
        </Switch>
        
    )
}

export default Header;