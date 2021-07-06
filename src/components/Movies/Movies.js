import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import Navigation from '../Navigation/Navigation';


const Movies = () => {
    return (
        <section className='movies'>
            <SearchForm />
            <FilterCheckbox />
            <MoviesCardList />
            <Navigation />
        </section>
    )
}

export default Movies;