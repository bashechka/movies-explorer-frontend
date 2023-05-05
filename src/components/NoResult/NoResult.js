import React from 'react';
import './NoResult.css';
import { useNavigate } from 'react-router-dom';

function NoResult() {

  // Функция навигации кнопки "Назад"
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <div className="noresult">
      <h2 className="noresult__title">404</h2>
      <p className="noresult__subtitle">Страница не найдена</p>
      <button type="button" onClick={goBack} className="noresult__button">Назад</button>
    </div>
  )
}

export default NoResult