import React, { useState } from 'react';
import './SavedMovies.css';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import Preloader from '../Movies/Preloader/Preloader';

function SavedMovies({ loggedIn }) {
  const [isLoading, setLoading] = useState(false);

  const movies = [{}, {}, {}];

  return (
    <section className="savedmovies">
      <SearchForm/>
      {isLoading ? (
        <Preloader/>
      ) : (
        <MoviesCardList movies={movies} />
      )}
    </section>
  );
}

export default SavedMovies