import React, { useState, useEffect } from 'react';
import './App.css';
import Header from '../Header/Header';
import MoviesHeader from '../Header/MoviesHeader';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import NoResult from '../NoResult/NoResult';
import Register from '../Register/Register';
import Login from '../Login/Login';
import { Route, Routes } from 'react-router-dom';
import { CurrentUserContext, defaultCurrentUser } from '../../contexts/CurrentUserContext';

function App() {
  const [currentUser, setCurrentUser] = useState(defaultCurrentUser);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Header/> 
        <Routes>
           <Route path='/' element={<Main />}/>
           <Route path='/signup' element={<Register />}/>
           <Route path='/signin' element={<Login />}/>
           <Route path='/profile' element={<Profile />}/>
           <Route path='/movies' element={<Movies />}/>
           <Route path='/saved-movies' element={<SavedMovies />}/>
           <Route path='/*' element={<NoResult />}/>
        </Routes>
        <Footer/>
      </div>
    </CurrentUserContext.Provider>
  );
};

export default App;
