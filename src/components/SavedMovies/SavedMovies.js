import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import FilterCheckBox from '../FilterCheckbox/FilterCheckbox';

const SavedMovies = () => {
    return (
        <section className='saved-movies'>
            <SearchForm />
            <FilterCheckBox />
            <MoviesCardList />
        </section>
    )
}

export default SavedMovies;