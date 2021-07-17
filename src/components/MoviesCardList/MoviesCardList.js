import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import {useEffect, useState} from "react";


const MoviesCardList = ({movies, isFavorite, onBookmarks, bookmarksStatus}) => {
  const [extraPortion, setExtraPortion] = useState(3);
  const [currentCount, setCurrenCount] = useState(0);
  const [renderMovies, setRenderMovies] = useState([]);

  const getCountMovies = (windowSize) => {
    if (windowSize > 768) {
      return {
        start: 12,
        add: 3
      };
    } else if (windowSize > 480 && windowSize <= 768) {
      return {
        start: 8,
        add: 2
      };
    } else {
      return {
        start: 5,
        add: 2
      };
    }
  }

  const renderExtraPortion = () => {
    const count = Math.min(movies.length, currentCount + extraPortion);
    const extraMovies = movies.slice(currentCount, count);
    setRenderMovies([...renderMovies, ...extraMovies]);
    setCurrenCount(count);
  }

  const handleResize = () => {
    const windowSize = window.innerWidth;
    const sizePortion = getCountMovies(windowSize);
    setExtraPortion(sizePortion.add);
  }


  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const windowSize = window.innerWidth;
    const sizePortion = getCountMovies(windowSize);
    setExtraPortion(sizePortion.add);

    const count = Math.min(movies.length, sizePortion.start);
    setRenderMovies(movies.slice(0, count));
    setCurrenCount(count);
  }, [movies]);

  const handleAddMovies = () => {
    renderExtraPortion();
  }

  return(
    <section className='movies-card-list'>
      <div className='movies-card-list__container'>
        {renderMovies.map((movie, index) => {
          return <MoviesCard
              key={index}
              movie={movie}
              isFavorite={isFavorite}
              onBookmarks={onBookmarks}
              bookmarksStatus={bookmarksStatus}
          />
        })}
      </div>

      {movies.length !== 0 && currentCount < movies.length && <button type="button" className="movies-card-list__button" onClick={handleAddMovies}>
        <p className="movies-card-list__button-text">Ещё</p>
      </button>}

    </section>
  )
}

export default MoviesCardList;
