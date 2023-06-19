import React from 'react';
import './Header.css';
import { Link, Navigate } from 'react-router-dom';
import logo from '../../images/logo.svg';
import { useNavigate } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

const Header = (props) => {
  const navigate = useNavigate();

  if (props.loggedIn) {
    return (
      <header className="movies-header">
        <div className="movies-header__wrapper">
          <img className="header__logo" src={logo} alt="Логотип" onClick={() => navigate('/')} />
          <Link className="movies-header__link" to="/movies">Фильмы</Link>
          <Link className="movies-header__link" to="/saved-movies">Сохраненные фильмы</Link>
          <Navigation loggedIn={props.loggedIn}/>
        </div>  
        <button className="movies-header__button" onClick={() => navigate('/profile')}>Аккаунт</button>
      </header>
    )
  } else {
    return (
      <header className="header">
        <img className="header__logo" src={logo} alt="Логотип" onClick={() => navigate('/')} />
        <div className="header__wrapper">
          <Link className="header__link" to="/signup">Регистрация</Link>
          <button className="header__button" onClick={() => navigate('/signin')}>Войти</button>
        </div>    
      </header>
    );
  }
};

export default Header;
