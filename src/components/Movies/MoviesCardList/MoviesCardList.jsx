import './MoviesCardList.css';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';

const MoviesCardList = () => {
  // const { pathname } = useLocation();

  return (
    <section className="cards">

        <ul className="cards__list">
     <MoviesCard/>
     <MoviesCard/>
     <MoviesCard/>
     <MoviesCard/>
     <MoviesCard/>
     <MoviesCard/>
     <MoviesCard/>
     <MoviesCard/>
     <MoviesCard/>
     <MoviesCard/>
     <MoviesCard/>
     <MoviesCard/>
        </ul>
        <div className="cards__text">Ничего не найдено</div>

        <div className="cards__button-container">
          <button className='cards__button' type="button" name="more">Ещё</button>
        </div>
    </section>
  );
};

export default MoviesCardList;