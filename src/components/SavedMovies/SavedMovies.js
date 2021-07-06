import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import FilterCheckBox from '../FilterCheckbox/FilterCheckbox';
import Navigation from '../Navigation/Navigation';

const SavedMovies = () => {
    return (
        <section className='saved-movies'>
            <SearchForm />
            <FilterCheckBox />
            <MoviesCardList />
            <Navigation />
        </section>
    )
}

export default SavedMovies;