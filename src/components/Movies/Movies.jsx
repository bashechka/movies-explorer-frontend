import React, { useState, useEffect } from 'react';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Preloader from './Preloader/Preloader';
import mainApi from '../../utils/MainApi'
import moviesApi from '../../utils/MoviesApi'
import './Movies.css';

function Movies() {
  const [isLoading, setLoading] = useState(false);
  const [query, setQuery] = useState(localStorage.getItem('searchQuery') || '');
  const [isShortOnly, setShortOnly] = useState(localStorage.getItem('searchIsShortOnly') === 'true');

  const [moviesMessage, setMoviesMessage] = useState('');
  const [moviesServer, setMoviesServer] = useState(JSON.parse(localStorage.getItem('searchMovies') || '[]'));
  const [moviesSaved, setMoviesSaved] = useState(new Map());
  const [moviesFiltered, setMoviesFiltered] = useState([]);

  const [maxMovies, setMaxMovies] = useState(0);
  const [moreMoviesCount, setMoreMoviesCount] = useState(0);

  useEffect(() => {
    updateMaxMovies();
    setLoading(true);
    const token = localStorage.getItem('token');
    mainApi.setToken(token);
    loadSavedMovies();
    window.addEventListener('resize', updateMaxMovies);
  }, []);

  useEffect(() => {
    handleFiltering();
    setLoading(false);
  }, [query, isShortOnly, moviesServer, moviesSaved]);

  function updateMaxMovies() {
    if (window.innerWidth < 767) {
      setMaxMovies(5);
      setMoreMoviesCount(1);
    } else if (window.innerWidth < 990) {
      setMaxMovies(8);
      setMoreMoviesCount(2);
    } else {
      setMaxMovies(12);
      setMoreMoviesCount(3);
    }
  }

  function handleFiltering() {
    if (query == '') {
      setMoviesMessage('Нужно ввести ключевое слово');
      return;
    }
    localStorage.setItem('searchIsShortOnly', isShortOnly);
    localStorage.setItem('searchQuery', query);

    let filtered = moviesServer.filter(m => (
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
      const saved = moviesSaved.get(m.id);
      m.saved = saved !== undefined;
      if (saved) {
        m.savedId = saved._id;
      }
      m.thumbnail = 'https://api.nomoreparties.co/' + m.image.url;
      m.key = m.id;
    });
    setMoviesFiltered(filtered);
  }

  function handleSearchForm({ query, isShortOnly }) {
    setQuery(query);
    setShortOnly(isShortOnly);
    setLoading(true);

    if (moviesServer.length === 0) {
      loadMoviesFromServer();
    }
  }

  function handleSaveToggle(movie) {
    if (movie.saved) {
      mainApi.deleteMovie(movie.savedId)
        .then(() => {
          moviesSaved.delete(movie.id);
          setMoviesSaved(new Map(moviesSaved));
        })
        .catch((err) => {
          console.log(err);
          setMoviesMessage(err.message);
        });

    } else {
      const myMovie = {
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `https://api.nomoreparties.co/${movie.image.url}`,
        trailerLink: movie.trailerLink,
        thumbnail: `https://api.nomoreparties.co/${movie.image.url}`,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      }
      mainApi.createMovie(myMovie)
        .then((result) => {
          moviesSaved.set(movie.id, result);
          setMoviesSaved(new Map(moviesSaved));
        })
        .catch((err) => {
          console.log(err);
          setMoviesMessage(err.message);
        });
    }
  }

  function loadSavedMovies() {
    return mainApi.getMovies()
      .then((result) => {
        if (result.data) {
          setMoviesSaved(new Map(
            result.data.map(r => {
              return [r.movieId, r];
            }),
          ));
        }
      })
      .catch((err) => {
        console.log(err);
        setMoviesMessage(err.message);
      });
  }

  function loadMoviesFromServer() {
    return moviesApi.getMovies()
      .then((result) => {
        setMoviesServer(result);
        localStorage.setItem('searchMovies', JSON.stringify(result));
      })
      .catch((err) => {
        console.log(err);
        setMoviesMessage('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
      });
  }

  function handleMore() {
    setMaxMovies(maxMovies + moreMoviesCount);
  }

  return (
    <main className='movies'>
      <SearchForm
        onSearchForm={handleSearchForm}
        currentQuery={query}
        currentIsShortOnly={isShortOnly} />

      {isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList
          movies={moviesFiltered.filter((_, i) => i < maxMovies)}
          message={moviesMessage}
          onSaveToggle={handleSaveToggle}
          onMore={handleMore}
          isMore={moviesFiltered.length > maxMovies}
        />
      )}
    </main>
  );
}

export default Movies;