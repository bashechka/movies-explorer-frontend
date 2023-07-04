import React from 'react';
import { useLocation } from "react-router-dom";
import './MoviesCard.css';

const MoviesCard = (props) => {
  const location = useLocation();

  return (
    <li className="card">
      <div className="card__element">
        <p className="card__title">33 слова о дизайне</p>
        <div className="card__buttons">
            {/* {(location.pathname === "/movies") && <button type="button" className="card__button card__button_active" />} */}
            {(location.pathname === "/movies") && <button type="button" className="card__button card__button_inactive" />}
            {(location.pathname === "/saved-movies") && <button type="button" className="card__button card__button_delete" />}
        </div>
      </div>
      <p className="card__duration">1ч 35м</p>
        <img className="card__image" src="../../../../images/card-pic.jpg" alt="название"></img>
    </li>
  );
};

export default MoviesCard;