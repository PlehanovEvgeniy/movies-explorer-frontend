import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Navigation from '../Navigation/Navigation';
import Preloader from "../Preloader/Preloader";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

const SavedMovies = ({movies, shortMovies, isLoading, onSearch, searchResponse, isShortChecked, onShortChange, onBookmarks, bookmarksStatus}) => {
  return (
    <section className='saved-movies'>
      <SearchForm onSearch={onSearch}/>
      <FilterCheckbox checked={isShortChecked} onChange={onShortChange}/>
      {isLoading === true && <Preloader/>}

      {searchResponse
          ? movies.length === 0 && (
          <p className="movie__response">
            {searchResponse}
          </p>
      )
          : movies.length === 0 && (
          <p className="movie__response">
            Нужно ввести ключевое слово
          </p>
      )}

      {isShortChecked &&
      movies.length !== 0 &&
      shortMovies.length === 0 && (
          <p className="movie__response">
            Среди фильмов нет короткометражек
          </p>
      )}

      {movies.length !== 0 && <MoviesCardList
          movies={isShortChecked ? shortMovies : movies}
          isFavorite={true}
          onBookmarks={onBookmarks}
          bookmarksStatus={bookmarksStatus}
      />}
    </section>
  )
}

export default SavedMovies;
