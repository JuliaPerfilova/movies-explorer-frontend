import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import {useState} from "react";
import Loader from "../Loader/Loader";

function Movies({moviesArr}) {

  const [moviesQuantityToShow, setMoviesQuantityToShow] = useState(12);
  const [isLoading, setIsLoading] = useState(false);

  const handleMoreButtonClick = () => {
    setMoviesQuantityToShow(moviesQuantityToShow + 3);
  }

  const handleSearchClick = () => {
    setIsLoading(!isLoading);
  }

  return (
    <div className="movies">
      <SearchForm
        onSearchClick={handleSearchClick}/>
      {!isLoading &&
        <MoviesCardList
          moviesQuantityToShow={moviesQuantityToShow}
          moviesArr={moviesArr}
        />}
      <Loader
        isLoading={isLoading}
        isMoreButtonToShow={moviesArr.length > moviesQuantityToShow}
        onMoreButtonClick={handleMoreButtonClick}/>
    </div>
  );
}

export default Movies;
