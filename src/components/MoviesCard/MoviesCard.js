import ClickableElement from "../ClickableElement/ClickableElement";
import {LINK_TYPES} from "../../utils/Constants";
import {useState} from "react";
import noImageImg from "../../images/noImageImg.jpg"

function MoviesCard({title, duration, imageUrl, isSaved, isSavedMoviesPage}) {
  const [saved, setSaved] = useState(isSaved);
  const [saveButtonText, setSaveButtonText] = useState(saved ? '' : 'Сохранить');

  const handleCardButtonClick = () => {
    if (saveButtonText === '') {
      setSaveButtonText('Сохранить');
    } else {
      setSaveButtonText('');
    }
    setSaved(!saved);
  }

  return (
    <article className="movies-card">
      <div className="movies-card__header">
        <h3 className='movies-card__title'>{title}</h3>
        <p className="movies-card__duration">{duration}</p>
      </div>
      <img
        className='movies-card__image'
        src={imageUrl === undefined || imageUrl === null ? 'wrong-url' : imageUrl} alt='Фильм'
        onError={({currentTarget}) => {
          currentTarget.onerror = null;
          currentTarget.src = noImageImg;
        }}/>
      <ClickableElement
        type={LINK_TYPES.BUTTON}
        buttonClick={handleCardButtonClick}
        className={`movies-card__button${isSavedMoviesPage ?
          ' movies-card__button_type_delete' :
          saved ? ' movies-card__button_type_saved' : ''}`}>
        {saved ? '' : saveButtonText}
      </ClickableElement>
    </article>
  );
}

export default MoviesCard;
