import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({isSavedMoviesPage = false, moviesArr, moviesQuantityToShow}) {

  return (
    <section className="movies-card-list">
      {
        moviesArr.slice(0, moviesQuantityToShow).map((movie, i) => {
          return (
            <MoviesCard
              key={i}
              title={movie.title}
              duration={movie.duration}
              imageUrl={movie.imageUrl}
              isSaved={movie.isSaved}
              isSavedMoviesPage={isSavedMoviesPage}/>
          );
        })
      }
    </section>
  );
}

export default MoviesCardList;
