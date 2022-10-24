import SearchForm from "../SearchForm/SearchForm";
import {useState} from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Loader from "../Loader/Loader";

function SavedMovies({savedMoviesArr}) {

  const [moviesQuantityToShow, setMoviesQuantityToShow] = useState(12);
  const [isLoading, setIsLoading] = useState(false);

  const handleMoreButtonClick = () => {
    setMoviesQuantityToShow(moviesQuantityToShow + 3);
  }

  const handleSearchClick = () => {
    setIsLoading(!isLoading);
  }
  return (
    <div className='saved-movies'>
      <SearchForm
        onSearchClick={handleSearchClick}/>
      {!isLoading &&
        <MoviesCardList
          isSavedMoviesPage={true}
          moviesQuantityToShow={moviesQuantityToShow}
          moviesArr={savedMoviesArr}
        />}
      <Loader
        isLoading={isLoading}
        isMoreButtonToShow={savedMoviesArr.length > moviesQuantityToShow}
        onMoreButtonClick={handleMoreButtonClick}/>
    </div>
  );
}

export default SavedMovies;
