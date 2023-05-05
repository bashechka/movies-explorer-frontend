import React from 'react';
import './Header.css';
import { Link, Navigate } from 'react-router-dom';
import logo from '../../images/logo.svg';
import { useNavigate } from 'react-router-dom';
// import NavAuth from '../NavAuth/NavAuth';
// import Navigation from '../Navigation/Navigation';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип" onClick={() => navigate('/')} />
      <div className="header__wrapper">
        <Link className="header__link" to="/signup">Регистрация</Link>
        <button className="header__button" onClick={() => navigate('/signin')}>Войти</button>
      </div>    
    </header>
  );
};

export default Header;
