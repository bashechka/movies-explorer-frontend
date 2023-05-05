import './MoviesCard.css';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const MoviesCard = () => {
  // const { pathname } = useLocation();
  // const [favorite, setFavorite] = useState(false);

  // function handleFavoriteToogle() {
  //   const newFavorite = !favorite;
  //   const savedFilm = filmsSaved.filter((obj) => {
  //     return obj.movieId == film.id;
  //   });
  //   savedMoviesToggle({ ...film, _id: savedFilm.length > 0 ? savedFilm[0]._id : null }, newFavorite);
  // }

  // function handleFavoriteDelete() {
  //   savedMoviesToggle(film, false);
  // }

  // function getMovieDuration(mins) {
  //   return `${Math.floor(mins / 60)}ч ${mins % 60}м`;
  // }

  // useEffect(() => {
  //   if (pathname !== '/saved-movies') {
  //     const savedFilm = filmsSaved.filter((obj) => {
  //       return obj.movieId == film.id;
  //     });

  //     if (savedFilm.length > 0) {
  //       setFavorite(true);
  //     } else {
  //       setFavorite(false);
  //     }
  //   }
  // }, [pathname, filmsSaved, film.id]);

  return (
    <li className="card">
      <div className="card__element">
        <p className="card__title">Название</p>
        <div className="card__buttons">
          
            <button type="button" className="card__button card__button_active"  />

        </div>
      </div>
      <p className="card__duration">1ч 35м</p>
        <img className="card__image" src="../../../../images/card-pic.jpg" alt="название"></img>
    </li>
  );
};

export default MoviesCard;