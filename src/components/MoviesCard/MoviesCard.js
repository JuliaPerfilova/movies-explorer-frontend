import ClickableElement from "../ClickableElement/ClickableElement";
import {LINK_TYPES} from "../../utils/constants";
import {useState} from "react";
import noImageImg from "../../images/noImageImg.jpg"

function MoviesCard({movie, savedId, onSaveClick, onDeleteClick, isSavedMoviesPage}) {
  const [saved, setSaved] = useState(savedId ? true : false);
  const [saveButtonText, setSaveButtonText] = useState(saved ? "" : "Сохранить");


  const handleSaveMovie = () => {
    onSaveClick(movie)
      .then(() => {
        setSaveButtonText("");
        setSaved(true);
      })
      .catch(err => {
        console.log(err)
      })
  }

  const handleDelete = () => {
    onDeleteClick(savedId)
      .then(() => {
        if (!isSavedMoviesPage) {
          setSaveButtonText("Сохранить");
          setSaved(false);
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  const handleButtonClick = () => {
    saved ? handleDelete() : handleSaveMovie();
  }

  return (
    <article className="movies-card">
      <ClickableElement
        type={LINK_TYPES.LINK}
        to={movie.trailerLink}
        className="movies-card__header"
        isExternal={true}
      >
        <h3 className='movies-card__title'>{movie.nameRU}</h3>
        <p className="movies-card__duration">{movie.duration + " минут"}</p>
      </ClickableElement>
      <ClickableElement
        type={LINK_TYPES.LINK}
        to={movie.trailerLink}
        className="movies-card__image-link"
        isExternal={true}
      >
        <img
          className='movies-card__image'
          src={movie.image === undefined || movie.image === null ? 'wrong-url' : movie.image} alt='Фильм'
          onError={({currentTarget}) => {
            currentTarget.onerror = null;
            currentTarget.src = noImageImg;
          }}/>
      </ClickableElement>
      <ClickableElement
        type={LINK_TYPES.BUTTON}
        buttonClick={handleButtonClick}
        className={`movies-card__button${isSavedMoviesPage ?
          ' movies-card__button_type_delete' :
          saved ? ' movies-card__button_type_saved' : ''}`}>
        {saved ? '' : saveButtonText}
      </ClickableElement>
    </article>
  );
}

export default MoviesCard;
