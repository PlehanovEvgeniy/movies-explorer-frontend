import './NavTab.css';

const NavTab = () => {
    return(
        <ul className="nav">
            <li className="nav__item">
                <a href="#aboutProject" className="nav__link">О проекте</a>
            </li>
            <li className="nav__item">
                <a href="#technology" className="nav__link">Технологии</a>
            </li>
            <li className="nav__item">
                <a href="#aboutMe" className="nav__link">Студент</a>
            </li>
        </ul>
    )
}

export default NavTab;
