import React, { useContext, useState, useEffect } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './Profile.css';

function Profile({ onUpdateProfile, onSignOut, responseMessage }) {
  const nameRegEx = /^[а-яА-ЯёЁa-zA-Z -]+$/;
  const emailRegEx = /^([\w]+@([\w-]+\.)+[\w-]{2,4})?$/;

  const currentUser = useContext(CurrentUserContext);

  const [formValid, setFormValid] = useState(false);
  const [formEnabled, setFormEnabled] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const [name, setName] = useState(currentUser.name);
  const [nameError, setNameError] = useState('');

  const [email, setEmail] = useState(currentUser.email);
  const [emailError, setEmailError] = useState('');

  function handleSubmit(e) {
    setFormEnabled(false);
    e.preventDefault();
    onUpdateProfile({ name, email });
  }

  useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser.name, currentUser.email]);

  useEffect(() => {
    if (currentUser.name === name && currentUser.email === email) {
      setFormEnabled(false);
    } else {
      setFormEnabled(true);
    }
  }, [name, email, currentUser.name, currentUser.email]);

  function handleChangeName(e) {
    setName(e.target.value);

    if (e.target.value.length === 0) {
      setNameError('Поле не может быть пустым');
      setFormValid(false);
    } else if (!nameRegEx.test(String(e.target.value).toLocaleLowerCase())) {
      setNameError('Некорректное имя');
      setFormValid(false);
    } else if (e.target.value.length < 2 || e.target.value.length > 30) {
      setNameError('Имя пользователя должно быть длинее 2 и меньше 30');
      setFormValid(false);
    } else {
      setNameError('');
      setFormValid(true);
    }
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);

    if (e.target.value.length === 0) {
      setEmailError('Поле не может быть пустым');
      setFormValid(false);
    } else if (!emailRegEx.test(String(e.target.value).toLocaleLowerCase())) {
      setEmailError('Некорректный email');
      setFormValid(false);
    } else {
      setEmailError('');
      setFormValid(true);
    }
  }

  useEffect(() => {
    if (responseMessage) {
      setStatusMessage(responseMessage);
    } else {
      setStatusMessage('');
    }
  }, [responseMessage])

  return (
    <div>
      <form className="profile" onSubmit={handleSubmit}>
        <h2 className="profile__greetings">Привет, {currentUser.name}!</h2>
        <fieldset className="profile__user">
          <label className="profile__data">
            <p className="profile__data-field">Имя</p>
            <input
              id="profile__name"
              className="profile__input"
              type="text"
              name="name"
              placeholder="Виталий"
              minLength={2}
              maxLength={30}
              onChange={handleChangeName}
              value={name}
              required
            />
            <span className="input__error input__error-name">{nameError}</span>
          </label>
          <label className="profile__data">
            <p className="profile__data-field">E-mail</p>
            <input
              id="profile__email"
              className="profile__input"
              type="email"
              name="email"
              placeholder='pochta@yandex.ru'
              onChange={handleChangeEmail}
              value={email}
              required
            />
            <span className="input__error input__error-email">{emailError}</span>
          </label>
        </fieldset >
        <div className="profile__buttons">
          <span className="form__status-request">{statusMessage}</span>
          <button type="submit" disabled={!formValid || !formEnabled} className={`profile__button ${formValid && formEnabled ? "profile__button-edit" : "profile__button_disabled"}`}>Редактировать</button>
          <button type="button" className="profile__button profile__button-checkout" onClick={onSignOut} >Выйти из аккаунта</button>
        </div>
      </form>
    </div>
  );
}

export default Profile