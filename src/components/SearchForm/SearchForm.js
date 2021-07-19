import './SearchForm.css';
import {useState} from "react";

const SearchForm = ({onSearch}) => {
  const [keyword, setKeyword] = useState('');

  const handleChange = (e) => {
    setKeyword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(keyword);
  }

  return (
    <section className='search-form'>
      <form className='search-form__container' onSubmit={handleSubmit}>
        <div className='search-form__field'>
          <input
              onChange={handleChange}
              type="search"
              className="search-form__search"
              placeholder="Фильм" required/>
          <button type="submit" className='search-form__field-image'/>
        </div>
      </form>
    </section>
  )
}

export default SearchForm;
