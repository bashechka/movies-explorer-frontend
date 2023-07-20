import React, { useState, useEffect } from 'react';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function Login({ onLogin, responseMessage }) {
  const emailRegEx = /^([\w]+@([\w-]+\.)+[\w-]{2,4})?$/;

  const [formValid, setFormValid] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordlError] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    onLogin({ email, password });
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

  function handleChangePassword(e) {
    setPassword(e.target.value);

    if (!e.target.value) {
      setPasswordlError('Поле не может быть пустым');
      setFormValid(false);
    } else {
      setPasswordlError('');
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
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__greetings" >
        <Link to="/"><img className="form__logo" src={logo} alt="логотип" /></Link>
        <h2 className="form__title">Рады видеть!</h2>
      </div>
      <div className="form__main">
        <fieldset className="form__fields">
          <label className="form__field">
            <p className="form__text">E-mail</p>
            <input
              id="input__email"
              className="form__input"
              type="text"
              name="email"
              onChange={handleChangeEmail}
              value={email}
              required
            />
            <span className="input__error input__error-email">{emailError}</span>
          </label>
          <label className="form__field">
            <p className="form__text">Пароль</p>
            <input
              id="input__password"
              className="form__input"
              type="password"
              name="password"
              onChange={handleChangePassword}
              value={password}
              required
            />
            <span className="input__error input__error-password">{passwordError}</span>
          </label>
        </fieldset>
        <div className="form__submit">
          <span className="form__status-request">{statusMessage}</span>
          <button type="submit" disabled={!formValid} className={`form__submit-button ${formValid ? "" : "form__submit-button_disabled"}`}>Войти</button>
          <span className="form__subtitle">Ещё не зарегистрированы?<Link to="/signup" className="form__link">Регистрация</Link></span>
        </div>
      </div>
    </form>
  )
}

export default Login