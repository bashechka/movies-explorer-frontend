import React from 'react';
import { useLocation } from "react-router-dom";
import { SHORT_MOVIE_LENGTH } from '../../../utils/constants';
import './MoviesCard.css';

const MoviesCard = ({ movie, onSaveToggle }) => {
  const location = useLocation();

  const hours = movie.duration >= SHORT_MOVIE_LENGTH ? `${Math.floor(movie.duration / SHORT_MOVIE_LENGTH)} ч ` : '';
  const minutes = movie.duration === SHORT_MOVIE_LENGTH ? '' : `${movie.duration % SHORT_MOVIE_LENGTH} м`;

  return (
    <li className="card">
      <div className="card__element">
        <p className="card__title">{movie.nameRU}</p>
        <div className="card__buttons">
          {(location.pathname === "/movies") && <button type="button"
            className={`card__button ${movie.saved ? "card__button_active" : "card__button_inactive"}`}
            onClick={() => onSaveToggle(movie)} />}
          {(location.pathname === "/saved-movies") && <button type="button"
            className="card__button card__button_delete"
            onClick={() => onSaveToggle(movie)} />}
        </div>
      </div>
      <p className="card__duration">{`${hours} ${minutes}`}</p>
      <a href={movie.trailerLink} target="_blank" rel="noreferrer">
        <img className="card__image" alt={movie.nameRU} src={movie.thumbnail}></img>
      </a>
    </li>
  );
};

export default MoviesCard;