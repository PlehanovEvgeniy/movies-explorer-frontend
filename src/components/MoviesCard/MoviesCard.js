import './MoviesCard.css';


const MoviesCard = ({movie, isFavorite, onBookmarks, bookmarksStatus}) => {
  const isBookmark = bookmarksStatus(movie);

    // Создаём переменную, которую после зададим в `className` для кнопки удаления
    const movieBtnClassName = isBookmark ? isFavorite ? 'movies-card__button_type_delete' : 'movies-card__button_type_saved' : 'movies-card__button';



    const duration = `${Math.round(movie.duration / 60)}ч ${movie.duration % 60}м`;

    const handleBookmarkClick = () => {
      onBookmarks(movie, isBookmark);
    }

    return(
        <div className="movies-card">
          <div className="movies-card__info">
              <p className="movies-card__title">{movie.nameRU}</p>
              <button type="button" className={movieBtnClassName} onClick={handleBookmarkClick}/>
          </div>
          <p className="movies-card__time">{duration}</p>
          <a href={movie.trailer} target="_blank" rel="noopener noreferrer">
            <img className="movies-card__image" src={movie.image} alt={movie.nameRU} />
          </a>
        </div>
    )
}

export default MoviesCard;
