import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
// import NavAuth from '../NavAuth/NavAuth';
// import Navigation from '../Navigation/Navigation';

const Header = () => {
  return (
   
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип" />
      <div className="header__wrapper">
        <Link className="header__link" to="/">Регистрация</Link>
        <button className="header__button">Войти</button>
      </div>    
    </header>
  );
};

export default Header;