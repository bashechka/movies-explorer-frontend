import React, { useState, useEffect } from 'react';
import './SavedMovies.css';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import Preloader from '../Movies/Preloader/Preloader';
import mainApi from '../../utils/MainApi'

function SavedMovies() {
  const [isLoading, setLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [isShortOnly, setShortOnly] = useState(false);

  const [moviesMessage, setMoviesMessage] = useState('');
  const [movies, setMovies] = useState([]);
  const [moviesFiltered, setMoviesFiltered] = useState([]);

  useEffect(() => {
    setLoading(true);
    const token = localStorage.getItem('token');
    mainApi.setToken(token);
    loadMovies();
  }, []);

  useEffect(() => {
    handleFiltering();
    setLoading(false);
  }, [query, isShortOnly, movies]);

  function handleFiltering() {
    let filtered = movies.filter(m => (
      m.nameRU.toLowerCase().includes(query)
      || m.nameEN.toLowerCase().includes(query)
    ));
    if (isShortOnly) {
      filtered = filtered.filter(m => m.duration <= 40);
    }

    if (filtered.length === 0) {
      setMoviesMessage('Ничего не найдено');
    } else {
      setMoviesMessage('');
    }

    filtered.forEach(m => {
      m.key = m.movieId;
    });
    setMoviesFiltered(filtered);
  }

  function loadMovies() {
    return mainApi.getMovies()
      .then((result) => {
        if (result.data) {
          setMovies(result.data);
        }
      })
      .catch((err) => {
        console.log(err);
        setMoviesMessage(err.message);
      });
  }

  function handleSearchForm({ query, isShortOnly }) {
    setQuery(query);
    setShortOnly(isShortOnly);
    setLoading(true);

    loadMovies();
  }

  function handleSaveToggle(movie) {
    mainApi.deleteMovie(movie._id)
      .then(() => {
        setMovies(movies.filter(m => m.movieId != movie.movieId));
      })
      .catch((err) => {
        console.log(err);
        setMoviesMessage(err.message);
      });
  }

  return (
    <section className="savedmovies">
      <SearchForm
        onSearchForm={handleSearchForm}
        currentQuery={query}
        currentIsShortOnly={isShortOnly} />

      {isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList movies={moviesFiltered} message={moviesMessage} onSaveToggle={handleSaveToggle} />
      )}
    </section>
  );
}

export default SavedMovies