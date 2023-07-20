import React from 'react';
import './MoviesCardList.css';
import { useLocation } from "react-router-dom";
import MoviesCard from '../MoviesCard/MoviesCard';

const MoviesCardList = ({ movies, message, onSaveToggle, onMore, isMore }) => {
  const location = useLocation();

  return (
    <section className="cards">
      {message != '' || movies.length === 0 ? (
        <div className="cards__text">{message}</div>
      ) : (
        <>
          <ul className="cards__list">
            {movies.map((m) => <MoviesCard key={m.key} movie={m} onSaveToggle={onSaveToggle} />)}
          </ul>
          <div className="cards__button-container">
            {(location.pathname === "/movies" && isMore) && <button className='cards__button' type="button" onClick={onMore} name="more">Ещё</button>}
          </div>
        </>
      )}
    </section>
  );
};

export default MoviesCardList;