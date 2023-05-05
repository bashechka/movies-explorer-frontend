import './MoviesHeader.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
// import NavAuth from '../NavAuth/NavAuth';
import Navigation from '../Navigation/Navigation';

const MoviesHeader = () => {
  return (
   
    <header className="movies-header">
      <img className="header__logo" src={logo} alt="Логотип" />
      <div className="movies-header__wrapper">
        {/* <Link className="movies-header__link" to="/">Фильмы</Link>
        <Link className="movies-header__link" to="/">Сохраненные фильмы</Link>
        <button className="movies-header__button">Аккаунт</button> */}
        <Navigation/>
      </div>  
    </header>
  );
};

export default MoviesHeader;