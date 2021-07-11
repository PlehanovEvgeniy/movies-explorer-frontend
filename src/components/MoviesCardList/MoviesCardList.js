import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';


const MoviesCardList = () => {
    return(
        <section className='movies-card-list'>
            <div className='movies-card-list__container'>
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
            </div>
            <button type="button" className="movies-card-list__button">
                <p className="movies-card-list__button-text">Ещё</p>
            </button>
        </section>
    )
}

export default MoviesCardList;