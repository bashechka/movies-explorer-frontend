import React from 'react';
import './Footer.css';

function Footer() {

  return (
    <footer className="footer">
      <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__border"></div>
      <div className="footer__navigation">
        <p className="footer__copyright">&copy; 2023</p>
        <div className="footer__links">
          <a href="https://practicum.yandex.ru" className="footer__link" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
          <a href="https://github.com/bashechka" className="footer__link" target="_blank" rel="noreferrer">Github</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer