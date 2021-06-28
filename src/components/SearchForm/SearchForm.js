import './SearchForm.css';

const SearchForm = () => {
    return(
        <section className='search-form'>
            <div className='search-form__container'>
                <div className='search-form__field'>
                    <input type="search" className="search-form__search" placeholder="Фильм" />
                    <div className='search-form__field-image'/>
                </div>
            </div>
        </section>
    )
}

export default SearchForm;