import React, { useState } from "react";
import './Navigation.css';
import '../Header/Header.css';
import { Link, useLocation } from "react-router-dom";

function Navigation({ loggedIn }) {
  const [isNavigationSidebar, setIsNavigationSidebar] = useState(false);

  function openNavigationSidebar() {
    setIsNavigationSidebar(true)
  }

  function closeNavigationSidebar() {
    setIsNavigationSidebar(false)
  }

  const navigationClass = (`navigation ${loggedIn ? '' : 'navigation_logout'}`)

  const location = useLocation();
  const linkMoviesSidebar = (location.pathname === '/movies') ? "navigation__title-sidebar_active" : "";
  const linkSavedMoviesSidebar = (location.pathname === '/saved-movies') ? "navigation__title-sidebar_active" : "";

  return (
    <nav className={navigationClass}>
      {loggedIn && <button className="navigation__burger" onClick={openNavigationSidebar}></button>}

      {loggedIn && <div className={`navigation__sidebar ${isNavigationSidebar ? 'navigation__sidebar_opened' : ''}`} >
        <div className="navigation__content-sidebar">
          <ul className="navigation__menu-sidebar">
            <li className="navigation__title-sidebar"><Link to='/' className="navigation__link-sidebar">Главная</Link></li>
            <li className={`navigation__title-sidebar ${linkMoviesSidebar}`}><Link to='/movies' className="navigation__link-sidebar">Фильмы</Link></li>
            <li className={`navigation__title-sidebar ${linkSavedMoviesSidebar}`}><Link to='/saved-movies' className="navigation__link-sidebar">Сохранённые фильмы</Link></li>
          </ul>
          <div className="navigation__account-sidebar">
            <Link to='/profile' className="navigation__link navigation__link_logged">Аккаунт</Link>
            <Link to='/profile' className="navigation__button navigation__button_logged"></ Link>
          </div>
          <button className="navigation__button-close" onClick={closeNavigationSidebar}></button>
        </div>
      </div>}
    </nav>
  )
}

export default Navigation