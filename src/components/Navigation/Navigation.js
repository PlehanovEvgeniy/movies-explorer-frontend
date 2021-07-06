import React from "react";
import './Navigation.css';
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="navigation">
        <button type="button" className="navigation__close-button"></button>
        <nav className="navigation__container">
            <ul className="navigation__links">
                <li className="navigation__item">
                    <NavLink to="/" className="navigation__link">Главная</NavLink>
                </li>
                <li className="navigation__item">
                    <NavLink to="/movies" className="navigation__link navigation__link_active">Фильмы</NavLink>
                </li>
                <li className="navigation__item">
                    <NavLink to="/saved-movies" className="navigation__link">Сохранённые фильмы</NavLink>
                </li>
            </ul>
            <div className="navigation__account">
                <NavLink to="/profile" className="navigation__account-name">Аккаунт</NavLink>
                <div className="navigation__account-logo" />
            </div>
        </nav>
    </div>
  );
}