import { Route, Switch } from 'react-router-dom';
import './MoviesCard.css';
import Poster from '../../images/poster.jpg';

const MoviesCard = () => {
    return(
        <Switch>
            <Route path="/movies">
                <div className="movies-card">
                    <div className="movies-card__info">
                        <p className="movies-card__title">33 слова о дизайне</p>
                        <button type="button" className="movies-card__button movies-card__button_type_saved" />
                    </div>
                    <p className="movies-card__time">1ч 42м</p>
                    <img className="movies-card__image" src={Poster} alt='Постер'/>
                </div>
            </Route>

            <Route path="/saved-movies">
                <div className="movies-card">
                    <div className="movies-card__info">
                        <p className="movies-card__title">33 слова о дизайне</p>
                        <button type="button" className="movies-card__button_type_delete" />
                    </div>
                    <p className="movies-card__time">1ч 42м</p>
                    <img className="movies-card__image" src={Poster} alt='Постер'/>
                </div>
            </Route>
        </Switch>
    )
}

export default MoviesCard;