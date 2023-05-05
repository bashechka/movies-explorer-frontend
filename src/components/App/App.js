import './App.css';
import Header from '../Header/Header';
import MoviesHeader from '../Header/MoviesHeader';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import Profile from '../Profile/Profile';
import NoResult from '../NoResult/NoResult';
import Navigation from '../Navigation/Navigation';
import Register from '../Register/Register';
import Login from '../Login/Login';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <Header/> 
      <MoviesHeader/> 
      <Routes>
        <Route exact path="/">
        </Route>
      </Routes>
       <NoResult/> 
       <Main/> 
      <SearchForm /> 

       <Profile/> 
    <Login/>
     <MoviesCardList/>
      <Register/>
    <Footer/> 
    </div>
  );
};

export default App;
