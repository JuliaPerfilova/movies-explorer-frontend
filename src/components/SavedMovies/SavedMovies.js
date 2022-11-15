import SearchForm from "../SearchForm/SearchForm";
import {useEffect, useState} from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Loader from "../Loader/Loader";
import {filterShortMovies, searchMoviesByKeyword} from "../../utils/utils";

function SavedMovies({savedMoviesArr, onDeleteClick}) {

  const [shortMoviesChecked, setShortMoviesChecked] = useState(false);
  const [searchedKeyword, setSearchedKeyword] = useState('');

  const [moviesToShowArr, setMoviesToShowArr] = useState(savedMoviesArr);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (moviesToShowArr) {
      setIsLoading(false);
    }
  }, [moviesToShowArr])

  useEffect(() => {
    filterMyMovies(searchedKeyword, shortMoviesChecked);
  }, [savedMoviesArr])

  const filterMyMovies = (keyword, isShortMovies) => {
    const moviesByKeyword = searchMoviesByKeyword(keyword, savedMoviesArr);
    setMoviesToShowArr(isShortMovies ? filterShortMovies(moviesByKeyword) : moviesByKeyword);
  }

  const handleCheckboxChange = (isChecked, keyword) => {
    setShortMoviesChecked(isChecked);
    filterMyMovies(keyword, isChecked);
  }

  const handleSearchClick =(keyword, isShortMovies) => {
    setIsLoading(true);
    filterMyMovies(keyword, isShortMovies);
  }

  const getInitialValues = () => {
    return {
      initialCheckedValue: false,
      initialKeywordValue: ''
    };
  }
  
  const saveAndValidateKeyword = (keyword) => {
    setSearchedKeyword(keyword);
    return {isValid: true};
  }

  return (
    <div className='saved-movies'>
      <SearchForm
        onCheckBoxChange={handleCheckboxChange}
        inputRequired={false}
        getInitialValues={getInitialValues}
        saveAndValidateKeyword={saveAndValidateKeyword}
        searchedKeyword={searchedKeyword}
        shortMoviesChecked={shortMoviesChecked}
        onSearchClick={handleSearchClick}/>
      {!isLoading &&
        <MoviesCardList
          isSavedMoviesPage={true}
          onDeleteClick={onDeleteClick}
          moviesToShowArr={moviesToShowArr}
          savedMoviesArr={savedMoviesArr}
        />}
      <Loader
        isLoading={isLoading}
        isMoreButtonToShow={false}/>
    </div>
  );
}

export default SavedMovies;
