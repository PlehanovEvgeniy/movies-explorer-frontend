import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';


const Movies = () => {
    return (
        <section className='movies'>
            <SearchForm />
            <FilterCheckbox />
            <MoviesCardList />
        </section>
    )
}

export default Movies;