import './Header.css';
import { NavLink, Switch, Route } from 'react-router-dom';
import logo from '../../images/logo.svg';
import {useEffect, useState} from "react";
import Navigation from "../Navigation/Navigation";

const Header = () => {
    const [isBurgerOpen, setIsBurgerOpen] = useState(false);
    const [isBurgerShow, setIsBurgerShow] = useState(false);

    useEffect(() => {
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleResize = () => {
        const isShow = window.innerWidth <= 768;

        if (isShow) {
            setIsBurgerOpen(false);
        }

        setIsBurgerShow(isShow);
    }

    const handleBurgerOpen = () => {
        if (isBurgerShow) {
            setIsBurgerOpen(true);
        }
    }

    const handleBurgerClose = () => {
        setIsBurgerOpen(false);
    }

    return (
        <>
            {isBurgerOpen !== true && <Switch>
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
                        </div>
                        <div className="header__account">
                            <NavLink to="/profile" className="header__account-name">Аккаунт</NavLink>
                            <div className="header__account-logo"></div>
                        </div>
                        <button type="button" className="header__burger-menu" onClick={handleBurgerOpen}></button>
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
                        </div>
                        <div className="header__account">
                            <NavLink to="/profile" className="header__account-name">Аккаунт</NavLink>
                            <div className="header__account-logo"></div>
                        </div>
                        <button type="button" className="header__burger-menu" onClick={handleBurgerOpen}></button>
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
                        </div>
                        <div className="header__account">
                            <NavLink to="/profile" className="header__account-name">Аккаунт</NavLink>
                            <div className="header__account-logo"></div>
                        </div>
                        <button type="button" className="header__burger-menu" onClick={handleBurgerOpen}></button>
                    </header>
                </Route>
            </Switch>}
            {isBurgerShow === true && <Navigation
                isOpen={isBurgerOpen}
                onClose={handleBurgerClose}/> }
        </>


    )
}

export default Header;
