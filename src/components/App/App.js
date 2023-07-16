import React, { useState, useEffect } from 'react';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import NoResult from '../NoResult/NoResult';
import Register from '../Register/Register';
import Login from '../Login/Login';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import mainApi from '../../utils/MainApi'
import { Route, Routes, useNavigate } from 'react-router-dom';
import { CurrentUserContext, defaultCurrentUser } from '../../contexts/CurrentUserContext';

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [currentUser, setCurrentUser] = useState(defaultCurrentUser);
  const [responseMessage, setResponseMessage] = useState(null);

  let navigate = useNavigate();

  React.useEffect(() => {
    checkAuthUser();
  }, []);

  function checkAuthUser() {
    const token = localStorage.getItem('token');
    mainApi.setToken(token);
    if (token) {
      mainApi.getUserInfo()
        .then((user) => {
          if (user && user.data) {
            setLoggedIn(true);
            setCurrentUser(user.data);
          } else {
            signOut();
          }
        })
        .catch((err) => {
          console.log(err);
          signOut();
        })
    } else {
      setLoggedIn(false);
    }
  }

  function signOut() {
    setLoggedIn(false);
    localStorage.removeItem('token');
    navigate('/signin');
    mainApi.setToken('');
    setCurrentUser(defaultCurrentUser);
  }

  function handleRegister(data) {
    const email = data.email;
    const password = data.password;
    mainApi.signUp(data)
      .then((result) => {
        if (result) {
          handleLogin({ email, password });
          setResponseMessage(null);
        } else {
          setLoggedIn(false);
          console.log(data);
        }
      })
      .catch((err) => {
        setLoggedIn(false);
        setResponseMessage(err.message);
        console.log(err);
      });
  }

  function handleLogin(data) {
    mainApi.signIn(data)
      .then((result) => {
        if (result && result.token) {
          localStorage.setItem('token', result.token);
          navigate('/movies');
          setLoggedIn(true);
          setResponseMessage(null);
        } else {
          setLoggedIn(false);
          console.log(data);
        }
      })
      .catch((err) => {
        setLoggedIn(false);
        setResponseMessage(err.message);
        console.log(err);
      });
  }

  function handleUpdateProfile(data) {
    mainApi.updateUserProfile(data)
      .then((result) => {
        if (result) {
          setResponseMessage('Профиль успешно сохранен');
        } else {
          console.log(data);
        }
      })
      .catch((err) => {
        setResponseMessage(err.message);
        console.log(err);
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Header loggedIn={loggedIn} />
        <Routes>
          <Route path='/' element={<Main />} />

          <Route path='/signin' element={
            <ProtectedRoute loggedIn={!loggedIn}>
              <Login onLogin={handleLogin} responseMessage={responseMessage} />
            </ProtectedRoute>
          } />
          <Route path='/signup' element={
            <ProtectedRoute loggedIn={!loggedIn}>
              <Register onRegister={handleRegister} responseMessage={responseMessage} />
            </ProtectedRoute>
          } />

          <Route path='/profile' element={
            <ProtectedRoute loggedIn={loggedIn}>
              <Profile onUpdateProfile={handleUpdateProfile} onSignOut={signOut} responseMessage={responseMessage} />
            </ProtectedRoute>
          } />
          <Route path='/movies' element={
            <ProtectedRoute loggedIn={loggedIn}>
              <Movies />
            </ProtectedRoute>
          } />
          <Route path='/saved-movies' element={
            <ProtectedRoute loggedIn={loggedIn}>
              <SavedMovies />
            </ProtectedRoute>
          } />

          <Route path='/*' element={<NoResult />} />
        </Routes>
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
};

export default App;
