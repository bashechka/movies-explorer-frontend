import './SearchForm.css';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import '../FilterCheckbox/FilterCheckbox.css';

function SearchForm() {
  return (
    <div className="searchform">
      <form className="searchform__form" noValidate>
       <div className="searchform__loupe-icon"></div>
        <input
          type="text"
          className="searchform__input"
          placeholder="Фильм"
          name="name"
        />
        
        <button
          type="button"
          className="searchform__button">
        </button>

        <div className="searchform__border-vertical"></div>
        <div className="searchform__checkbox">
        <FilterCheckbox/>
        <p className="searchform__text">Короткометражки</p>
        </div>
       
      </form>
      <div className="searchform__border"></div>
    </div>
  )
}

export default SearchForm