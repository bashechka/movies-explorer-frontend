import React, { useState, useEffect } from 'react';
import './SearchForm.css';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import '../FilterCheckbox/FilterCheckbox.css';

function SearchForm({ onSearchForm, currentQuery, currentIsShortOnly }) {

  const [query, setQuery] = useState('');
  const [isShortOnly, setShortOnly] = useState(false);

  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    setQuery(currentQuery);
    setShortOnly(currentIsShortOnly);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    onSearchForm({ query, isShortOnly });
  }

  function handleChangeQuery(e) {
    setQuery(e.target.value);

    if (e.target.value.length === 0) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }

  function handleChangeShortOnly(e) {
    const { checked } = e.target;
    setShortOnly(checked);
    onSearchForm({ query, isShortOnly: checked });
  }

  return (
    <div className="searchform">
      <form className="searchform__form" onSubmit={handleSubmit}>
        <div className="searchform__loupe-icon"></div>
        <input
          type="text"
          className="searchform__input"
          placeholder="Фильм"
          name="name"
          onChange={handleChangeQuery}
          value={query}
          required
        />

        <button
          type="submit"
          disabled={!formValid}
          className="searchform__button">
        </button>

        <div className="searchform__border-vertical"></div>
        <div className="searchform__checkbox">
          <FilterCheckbox onChange={handleChangeShortOnly} checked={isShortOnly} />
          <p className="searchform__text">Короткометражки</p>
        </div>
      </form>

      <div className="searchform__border"></div>
    </div>

  )
}

export default SearchForm