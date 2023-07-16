import React from 'react';
import { useLocation } from "react-router-dom";
import './MoviesCard.css';

const MoviesCard = ({ movie, onSaveToggle }) => {
  const location = useLocation();

  const hours = movie.duration >= 60 ? `${Math.floor(movie.duration / 60)} ч ` : '';
  const minutes = movie.duration === 60 ? '' : `${movie.duration % 60} м`;

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