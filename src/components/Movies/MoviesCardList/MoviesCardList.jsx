import React from 'react';
import './MoviesCardList.css';
import { useLocation } from "react-router-dom";
import MoviesCard from '../MoviesCard/MoviesCard';

const MoviesCardList = (props) => {
  const location = useLocation();

  return (
    <section className="cards">
      {props.movies.length === 0 ? (
        <div className="cards__text">Ничего не найдено</div>
      ) : (
        <>
          <ul className="cards__list">
            {props.movies.map((movie) => <MoviesCard movie={movie} />)}
          </ul>
          <div className="cards__button-container">
            {(location.pathname === "/movies") && <button className='cards__button' type="button" name="more">Ещё</button>}
            {/* {(location.pathname === "/saved-movies") && <button className='cards__button' type="button" name="more">Больше</button>} */}
          </div>
        </>
      )}
    </section>
  );
};

export default MoviesCardList;