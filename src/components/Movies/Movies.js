import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import {useCallback, useEffect, useMemo, useState} from "react";
import Loader from "../Loader/Loader";
import {useWindowWidth} from "../../hooks/useWindowWidth";
import {filterShortMovies, searchMoviesByKeyword} from "../../utils/utils";
import {getMovies} from "../../utils/MoviesApi";
import {API_URLS, WIDTH_THRESHOLDS, CARDS_BY_WIDTH, ADD_CARDS_BY_WIDTH} from "../../utils/constants";
import NothingFound from "../NothingFound/NothingFound";

function Movies({onSaveClick, onDeleteClick, savedMoviesArr}) {
  const width = useWindowWidth();

  const [shortMoviesChecked, setShortMoviesChecked] = useState(false);
  const [searchedKeyword, setSearchedKeyword] = useState('');
  const [isBeforeFirstSearch, setIsBeforeFirstSearch] = useState(true);

  const [moviesToShowArr, setMoviesToShowArr] = useState([]);

  const calculatedQuantityByWidth = useMemo(() => {
    return width > WIDTH_THRESHOLDS.HIGH
      ? CARDS_BY_WIDTH.HIGH
      : width > WIDTH_THRESHOLDS.LOW ? CARDS_BY_WIDTH.MEDIUM : CARDS_BY_WIDTH.LOW
  }, [width]);

  const [moviesQuantityToShow, setMoviesQuantityToShow] = useState(calculatedQuantityByWidth);
  const [searchResult, setSearchResult] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isServerError, setIsServerError] = useState(false);

  useEffect(() => {
    const initialKeywordValue = JSON.parse(localStorage.getItem('keyword')) || '';
    const initialCheckedValue = JSON.parse(localStorage.getItem('isShortMovies')) || false;
    const moviesByKeyword = JSON.parse(localStorage.getItem('moviesByKeyword')) || [];
    if (initialKeywordValue !== '') {
      setIsBeforeFirstSearch(false);
    }
    setShortMoviesChecked(initialCheckedValue);
    setSearchedKeyword(initialKeywordValue ? initialKeywordValue : '');
    setSearchResult(moviesByKeyword);
    setMoviesToShowArr(initialCheckedValue ? filterShortMovies(moviesByKeyword) : moviesByKeyword);
    setIsLoading(false);
  }, [])

  useEffect(() => {
    setMoviesQuantityToShow(calculatedQuantityByWidth)
  }, [calculatedQuantityByWidth])

  const handleCheckboxChange = (isChecked) => {
    setShortMoviesChecked(isChecked);
    setMoviesToShowArr(isChecked ? filterShortMovies(searchResult) : searchResult);
  }

  const handleMoreButtonClick = () => {
    setMoviesQuantityToShow(moviesQuantityToShow + (
      width > WIDTH_THRESHOLDS.HIGH
        ? ADD_CARDS_BY_WIDTH.HIGH
        : ADD_CARDS_BY_WIDTH.LOW));
  }

  const saveAndValidateKeyword = (keyword) => {
    setSearchedKeyword(keyword);
    if (!keyword || keyword === '') {
      return {isValid: false, message: 'Нужно ввести ключевое слово'};
    } else {
      return {isValid: true};
    }
  }

  const handleSearchClick = useCallback((keyword, isShortMovies) => {
    if (!keyword || keyword === '') return;
    setIsBeforeFirstSearch(false);
    localStorage.setItem('keyword', JSON.stringify(keyword));
    localStorage.setItem('isShortMovies', JSON.stringify(isShortMovies));
    setIsLoading(true);
    getMovies()
      .then(movies => {
        const moviesByKeyword = searchMoviesByKeyword(keyword, movies)
          .map(movie => {
            return {
              country: movie.country,
              director: movie.director,
              duration: movie.duration,
              year: movie.year,
              description: movie.description,
              image: API_URLS.IMAGES_URL + movie.image.url,
              trailerLink: movie.trailerLink,
              thumbnail: API_URLS.IMAGES_URL + movie.image.formats.thumbnail.url,
              movieId: movie.id,
              nameRU: movie.nameRU,
              nameEN: movie.nameEN,
            };
          });
        localStorage.setItem('moviesByKeyword', JSON.stringify(moviesByKeyword));
        setSearchResult(moviesByKeyword);
        setMoviesToShowArr(isShortMovies ? filterShortMovies(moviesByKeyword) : moviesByKeyword);
        setIsServerError(false);
      })
      .catch((err) => {
        console.log(err);
        setIsServerError(true);
        localStorage.removeItem('moviesByKeyword');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [])

  return (
    <div className="movies">
      <SearchForm
        inputRequired={true}
        shortMoviesChecked={shortMoviesChecked}
        searchedKeyword={searchedKeyword}
        onCheckBoxChange={handleCheckboxChange}
        saveAndValidateKeyword={saveAndValidateKeyword}
        onSearchClick={handleSearchClick}/>
      {
        !isLoading && !isBeforeFirstSearch &&
        (moviesToShowArr.length
          ? <MoviesCardList
            savedMoviesArr={savedMoviesArr}
            onSaveClick={onSaveClick}
            onDeleteClick={onDeleteClick}
            moviesQuantityToShow={moviesQuantityToShow}
            moviesToShowArr={moviesToShowArr}/>
          : <NothingFound
            isServerError={isServerError}/>)
      }
      <Loader
        isLoading={isLoading}
        isMoreButtonToShow={moviesToShowArr.length > moviesQuantityToShow}
        onMoreButtonClick={handleMoreButtonClick}/>
    </div>
  );
}

export default Movies;
