import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import { useNavigate, useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

const Header = ({ loggedIn }) => {
  const navigate = useNavigate();
  const location = useLocation();

  if (location.pathname === '/signup') {
    return (<></>);
  } else if (location.pathname === '/signin') {
    return (<></>);
  } else if (loggedIn) {
    return (
      <header className="movies-header">
        <div className="movies-header__wrapper">
          <img className="header__logo" src={logo} alt="Логотип" onClick={() => navigate('/')} />
          <Link className="movies-header__link" to="/movies">Фильмы</Link>
          <Link className="movies-header__link" to="/saved-movies">Сохраненные фильмы</Link>
          <Navigation loggedIn={loggedIn} />
        </div>
        <button className="movies-header__button" onClick={() => navigate('/profile')}>Аккаунт</button>
      </header>
    );
  } else {
    return (
      <header className="header">
        <img className="header__logo" src={logo} alt="Логотип" onClick={() => navigate('/')} />
        <div className="header__wrapper">
          <Link className="header__link" to="/signup">Регистрация</Link>
          <button className="header__button" onClick={() => navigate('/signin')}>Войти</button>
        </div>
      </header>
    )
  }
};

export default Header;
