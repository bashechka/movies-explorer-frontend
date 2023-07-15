import React, { useState } from 'react';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Preloader from './Preloader/Preloader';
import './Movies.css';

function Movies({ loggedIn }) {
  const [isLoading, setLoading] = useState(false);

  const movies = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
  // const movies = [];

  return (
    <main className='movies'>
      <SearchForm />

      {isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList movies={movies} />
      )}
    </main>
  );
}

export default Movies;