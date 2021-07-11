import { NavLink } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
      <div className="not-found">
        <div className="not-found__container">
          <h1 className="not-found__title">404</h1>
          <p className="not-found__subtitle">Страница не найдена</p>
          <NavLink to="/" className="not-found__link">Назад</NavLink>
        </div>
      </div>
    );
}

export default NotFound;