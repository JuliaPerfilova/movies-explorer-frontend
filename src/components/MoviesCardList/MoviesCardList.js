import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({onSaveClick, onDeleteClick ,isSavedMoviesPage = false, moviesToShowArr, savedMoviesArr, moviesQuantityToShow}) {

  return (
    <section className="movies-card-list">
      {
        (moviesQuantityToShow ? moviesToShowArr.slice(0, moviesQuantityToShow) : moviesToShowArr)
          .map((movie, i) => {
            const savedId = savedMoviesArr.find(savedMovie => savedMovie.movieId === movie.movieId)?._id;
            return (
              <MoviesCard
                key={i}
                movie={movie}
                savedId={savedId ? savedId : null}
                onSaveClick={onSaveClick}
                onDeleteClick={onDeleteClick}
                isSavedMoviesPage={isSavedMoviesPage}/>
            );
          })
      }
    </section>
  );
}

export default MoviesCardList;
