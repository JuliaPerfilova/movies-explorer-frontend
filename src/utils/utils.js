
export function filterShortMovies (movies) {
  return movies.filter((movie) => movie.duration <= 40);
}

export function searchMoviesByKeyword(keyword, movies) {
  const moviesByKeyword = movies.filter((item) => {
    const nameRU = item.nameRU.toLowerCase();
    const nameEN = item.nameEN.toLowerCase();
    const keywordLowerCase = keyword.toLowerCase();
    return (nameRU.includes(keywordLowerCase) || nameEN.includes(keywordLowerCase));
  });

  return moviesByKeyword;
}


